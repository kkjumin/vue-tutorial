<template>
  <div class="menu01">
    <h1>{{ this.$route.name }}</h1>
    <div class="content-view" style="max-width:1200px; margin:0 auto;">
      <v-card class="form-area">
        <v-file-input
          v-model="files"
          color="deep-purple accent-4"
          accept="image/png, image/jpeg, image/bmp"
          counter
          label="File input"
          placeholder="Select your files"
          prepend-icon="mdi-paperclip"
          outlined
          :show-size="1000"
        >
          <template v-slot:selection="{ index, text }">
            <v-chip
              v-if="index < 2"
              color="deep-purple accent-4"
              dark
              label
              small
            >
              {{ text }}
            </v-chip>

            <span
              v-else-if="index === 2"
              class="overline grey--text text--darken-3 mx-2"
            >
              +{{ files.length - 2 }} File(s)
            </span>
          </template>
        </v-file-input>

        <v-btn class="form-submit" @click="submit()">upload</v-btn>
        <progress-circular :show="progressShow" />
        <p class="clear"></p>
      </v-card>

      <!-- 이미지 리스트 -->
      <v-card v-if="!_.isEmpty(imgList)" class="list-area">
        <v-card
          class="list-item"
          v-for="(img, i) in imgList.contents"
          :key="i"
          @click="selectItem(img)"
          :class="selectedOn(img)"
        >
          <span class="img-name">{{ img.name }}</span
          ><v-btn class="btn-del" @click="clickDelete"
            ><v-icon>mdi-trash-can</v-icon></v-btn
          >
        </v-card>
      </v-card>

      <v-card v-if="!_.isEmpty(selectedItem)" class="ex-img">
        <img :src="selectedItem.url" />
      </v-card>
    </div>
    <confirm-popup text="삭제하시겠습니까?" @apply="deleteImgEvent" />
  </div>
</template>

<script>
import * as lovelyz from '@/store/modules/lovelyz';
import ConfirmPopup from '@/components/ConfirmPopup.vue';
import ProgressCircular from '@/components/ProgressCircular.vue';

export default {
  components: { ConfirmPopup, ProgressCircular },

  data() {
    return {
      files: null,
      selectedItem: {},
      progressShow: false,
    };
  },

  created() {
    this.getImgList();
  },
  computed: {
    ...lovelyz.mapGetters({
      imgList: lovelyz.GET_IMG_LIST,
    }),
    selectedOn() {
      return img => (this.selectedItem.name === img.name ? 'selected' : '');
    },
  },

  methods: {
    ...lovelyz.mapActions({
      getImgList: lovelyz.GET_IMG_LIST,
      uploadImg: lovelyz.UPLOAD_IMG,
      deleteImg: lovelyz.DELETE_IMG,
    }),
    submit() {
      if (!this.files) {
        alert('첨부된 이미지가 없습니다.');
        return;
      }
      if (!this.files.type.includes('image')) {
        alert('첨부된 파일이 image 파일이 아닙니다.');
      }

      // file 데이터를 배열에 감싸서보내야함
      // this.uploadImg({ img: [this.files] });

      this.progressShow = true;
      this.uploadImg({ img: [this.files] }).then(result => {
        this.progressShow = false;
        alert(result.message);
      });

      this.files = null;
    },
    selectItem(img) {
      this.selectedItem = img;
    },
    clickDelete() {
      this.$bus.$emit('confirm', true);
    },
    deleteImgEvent() {
      this.progressShow = true;
      this.deleteImg(this.selectedItem.name).then(result => {
        this.progressShow = false;
        alert(result.message);
      });
      this.selectedItem = {};
    },
  },
};
</script>

<style scoped>
.form-area,
.list-area,
.ex-img {
  padding: 20px;
  margin: 10px 10px;
  width: calc(100% / 2 - 20px);
  min-width: 280px;
  display: inline-block;
  vertical-align: top;
}
.ex-img {
  position: relative;
  width: 70%;
  display: block;
  margin: 0 auto;
  margin-top: 50px;
}
.ex-img img {
  width: 100%;
}
.form-area {
  height: 256px;
}
.list-area {
  max-height: 256px;
  height: 256px;
  overflow-y: scroll;
}

.list-item {
  cursor: pointer;
  margin: 0 0 10px 0;
  padding: 10px;
}

.list-item:hover {
  background: #e2e2e2;
}

.btn-del {
  position: absolute;
  right: 10px;
  top: 7px;
  width: 10px;
  min-width: 0px !important;
  height: 30px !important;
}

.selected {
  background: #e2e2e2;
}

.img-name {
  display: block;
  width: calc(100% - 50px);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

@media (max-width: 768px) {
  .form-area,
  .list-area,
  .ex-img {
    width: 100%;
    min-width: 0;
    margin: 10px 0;
  }

  .form-area {
    height: 165px;
  }
}

.form-submit {
  float: right;
}

.clear {
  clear: both;
}
</style>
