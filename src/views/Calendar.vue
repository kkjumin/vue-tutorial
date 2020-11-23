<template>
  <div>
    <h1>{{ this.$route.name }}</h1>
    <div class="content-view">
      <v-row class="fill-height">
        <v-col>
          <v-sheet height="64">
            <v-toolbar flat>
              <v-spacer></v-spacer>
              <v-btn fab text small color="grey darken-2" @click="prev">
                <v-icon small>
                  mdi-chevron-left
                </v-icon>
              </v-btn>
              <v-toolbar-title v-if="$refs.calendar">
                {{ $refs.calendar.title }}
              </v-toolbar-title>
              <v-btn fab text small color="grey darken-2" @click="next">
                <v-icon small>
                  mdi-chevron-right
                </v-icon>
              </v-btn>
              <v-spacer></v-spacer>
            </v-toolbar>
          </v-sheet>
          <v-sheet height="600">
            <v-calendar
              ref="calendar"
              v-model="focus"
              color="primary"
              :events="events"
              :event-color="getEventColor"
              :type="type"
              @click:event="showEvent"
              @click:date="showDialog"
              @change="updateRange"
            ></v-calendar>
            <v-menu
              v-model="selectedOpen"
              :close-on-content-click="false"
              :activator="selectedElement"
              offset-x
            >
              <v-card color="grey lighten-4" min-width="350px" flat>
                <v-toolbar :color="selectedEvent.color" dark>
                  <v-toolbar-title
                    v-html="selectedEvent.name"
                  ></v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-btn icon @click="modifyModal()">
                    <v-icon>mdi-pencil</v-icon>
                  </v-btn>
                  <v-btn icon @click="deleteConfirm()">
                    <v-icon>mdi-trash-can-outline</v-icon>
                  </v-btn>
                </v-toolbar>
                <v-card-text>
                  <span v-html="selectedEvent.details"></span>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn text color="secondary" @click="selectedOpen = false">
                    <v-icon>mdi-window-close</v-icon>
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-menu>

            <!-- 일정추가/수정 모달 -->
            <v-dialog v-model="dialog" width="500">
              <v-card>
                <v-card-title :class="`v-toolbar ${selectColor}`">
                  <span style="color:#fff">일정 추가</span>
                  <v-spacer></v-spacer>
                  <v-btn
                    style="margin:0;"
                    text
                    color="#fff"
                    @click="dialog = false"
                  >
                    <v-icon>mdi-window-close</v-icon>
                  </v-btn>
                </v-card-title>
                <v-card-text style="padding-top:20px;">
                  <v-row>
                    <v-col cols="12" md="6"
                      ><v-text-field
                        v-model="startDate"
                        label="시작일"
                      ></v-text-field
                    ></v-col>
                    <v-col cols="12" md="6"
                      ><v-text-field
                        v-model="endDate"
                        label="종료일"
                      ></v-text-field
                    ></v-col>
                  </v-row>

                  <v-text-field label="제목" v-model="title"></v-text-field>
                  <v-textarea label="내용" v-model="detail"></v-textarea>
                  라벨 색상
                  <ul>
                    <v-btn
                      v-for="color in colors"
                      :key="color"
                      :color="color"
                      @click="setColor(color)"
                      style="width: 38px; min-width: 0px; padding: 0; margin: 5px; "
                      :class="colorOn(color)"
                    >
                    </v-btn>
                  </ul>
                </v-card-text>

                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    v-if="!isMody"
                    text
                    color="secondary"
                    @click="writeEvent()"
                  >
                    추가
                  </v-btn>
                  <v-btn
                    v-else-if="isMody"
                    text
                    color="secondary"
                    @click="modifyEvent()"
                  >
                    수정
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
            <!-- 일정추가/수정 모달 -->
          </v-sheet>
        </v-col>
      </v-row>
    </div>
    <confirm-popup text="삭제하시겠습니까?" @apply="deleteEvent" />
  </div>
</template>

<script>
import ConfirmPopup from '@/components/ConfirmPopup.vue';

export default {
  components: {
    ConfirmPopup,
  },
  data: () => ({
    isMody: false,

    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    date: new Date().getDate(),
    hour: '',
    min: '',
    sec: '',

    focus: '',
    type: 'month',
    dialog: false,

    startDate: '',
    endDate: '',
    title: '',
    detail: '',
    selectColor: 'orange',

    selectedEvent: {},
    selectedElement: null,
    selectedOpen: false,
    events: [],
    colors: [
      'blue',
      'indigo',
      'deep-purple',
      'cyan',
      'green',
      'orange',
      'grey darken-1',
    ],
  }),
  created() {
    this.currentTime();
  },

  mounted() {
    this.$refs.calendar.checkChange();
    this.initEvents();
  },
  computed: {
    colorOn() {
      return color => (this.selectColor === color ? 'on' : '');
    },
    key() {
      return `${this.year}${this.month}${this.date}${this.hour}${this.min}${this.sec}`;
    },
  },
  methods: {
    modifyEvent() {
      this.deleteEvent();
      this.writeEvent();

      this.selectedEvent = {
        color: this.selectColor,
        details: this.detail,
        end: this.endDate,
        index: this.key,
        name: this.title,
        start: this.startDate,
        timed: true,
      };
    },
    modifyModal() {
      this.isMody = true;
      let e = this.selectedEvent;
      this.startDate = e.start;
      this.endDate = e.end;
      this.title = e.name;
      this.detail = e.details;
      this.selectColor = e.color;

      this.dialog = true;
      this.selectedOpen = false;
    },
    deleteConfirm() {
      this.$bus.$emit('confirm', true);
    },
    // 컨펌 apply일때 호출
    deleteEvent() {
      let target = this.events.findIndex(
        e => e.index === this.selectedEvent.index,
      );
      this.events.splice(target, 1);
      this.selectedOpen = false;
      this.update();
    },
    initEvents() {
      if (localStorage.events) {
        this.events = JSON.parse(localStorage.events);
      } else {
        // 로컬스토리지에 이벤트데이터 없을경우 임시 테스트 이벤트 삽입
        this.events = [
          {
            name: '테스트 일정',
            start: `${this.year}-${this.month}-${this.date}`,
            end: `${this.year}-${this.month}-${this.date}`,
            color: 'cyan',
            timed: true,
            details: '하이',
            index: '99999',
          },
        ];
      }
    },
    update() {
      localStorage.events = JSON.stringify(this.events);
    },
    setColor(color) {
      this.selectColor = color;
    },
    showDialog() {
      this.title = '';
      this.detail = '';
      this.selectColor = 'orange';
      this.isMody = false;
      this.dialog = true;
      this.startDate = this.endDate = this.focus;
    },
    writeEvent() {
      let event = this.events;
      event.push({
        name: this.title,
        start: this.startDate,
        end: this.endDate,
        color: this.selectColor,
        timed: true,
        details: this.detail,
        index: this.key,
      });
      this.events = event;
      this.dialog = false;
      this.update();
    },
    getEventColor(event) {
      return event.color;
    },
    prev() {
      this.initEvents();
      this.$refs.calendar.prev();
    },
    next() {
      this.initEvents();
      this.$refs.calendar.next();
    },
    showEvent({ nativeEvent, event }) {
      const open = () => {
        this.selectedEvent = event;
        this.selectedElement = nativeEvent.target;
        setTimeout(() => {
          this.selectedOpen = true;
        }, 10);
      };

      if (this.selectedOpen) {
        this.selectedOpen = false;
        setTimeout(open, 10);
      } else {
        open();
      }
      nativeEvent.stopPropagation();
    },
    updateRange() {
      this.initEvents();
    },
    currentTime() {
      setInterval(() => {
        this.hour = new Date().getHours();
        this.min = new Date().getMinutes();
        this.sec = new Date().getSeconds();
      }, 1000);
    },
  },
};
</script>

<style>
.on {
  width: 45px !important;
  height: 45px !important;
}
</style>
