<template>
  <div class="upload-images" :class="{'center': !uploadImages.length}">
    <div class="img-box" v-for="(item,index) in uploadImages" :key="index">
      <div class="icon-po">
        <img class="image" :src="item">
        <div class="icon-close" @click="imgclose(index)">×</div>
      </div>
    </div>
    <van-uploader :after-read="onRead" accept="image/*" multiple class="icon-add"></van-uploader>
  </div>
</template>

<script>
import { Uploader } from 'vant'
export default {
  name:'imgfile',
  data () {
    return {
      uploadImages: this.refundImages
    }
  },
  props: ['refundImages'],
  components: {
 [Uploader.name]: Uploader,
  },
  methods: {
    onRead (e) {
      //注意，我们这里没有使用form表单提交文件，所以需要用new FormData来进行提交
      let fd = new FormData()
      if (e && e.length) { // 判断是否是多图上传 多图则循环添加进去
        e.forEach(item => {
          fd.append("files", item.file)//第一个参数字符串可以填任意命名，第二个根据对象属性来找到file
        })
      } else {
        fd.append("files", e.file)
      }
      this.axios.post('/dynamic/uploadImg', fd) //url是服务器的提交地址
        //成功回调
        .then(res => {
          this.uploadImages = [...this.uploadImages, ...res.Result]
          this.$emit('uploadSuccess', this.uploadImages)

          
        }) //将服务器返回的图片链接添加进img数组，进行预览展示
    },
    //删除预览图片按钮
    imgclose (e) {
      this.uploadImages.splice(e, 1)
    },
  }
}
</script>

<style lang="less" scoped>
.upload-images {
  padding: 0 20px;
  .img-box {
    display: inline-block;
  }
  .image {
    width: 60px;
    height: 80px;
  }
  .icon-add {
    width: 40px;
    height: 40px;
    border: 1px solid #9a9ba3;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
    margin-top: 20px;
  }

  .icon-add:before {
    content: "";
    position: absolute;
    width: 50px;
    height: 2px;
    left: 50%;
    top: 50%;
    margin-left: -25px;
    margin-top: -1px;
    background-color: #aaabb2;
  }
  .icon-add:after {
    content: "";
    position: absolute;
    width: 2px;
    height: 50px;
    left: 50%;
    top: 50%;
    margin-left: -1px;
    margin-top: -25px;
    background-color: #aaabb2;
  }
  .icon-po {
    position: relative;
    width: 60px;
    height: 80px;
    margin-right: 20px;
    margin-top: 20px;
  }
  .icon-close {
    position: absolute;
    right: -8px;
    top: -8px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: red;
    color: #fff;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
