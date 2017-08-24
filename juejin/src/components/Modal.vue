<template>
  <div class="modal-box">
    <form>
      <div v-if="!reg" class="panda">
        <img v-show="on==1" src="//gold-cdn.xitu.io/v3/static/img/normal.0447fe9.png" class="normal">
        <img v-show="on==2" src="//gold-cdn.xitu.io/v3/static/img/greeting.1415c1c.png" class="normal">
        <img v-show="on==3" src="//gold-cdn.xitu.io/v3/static/img/blindfold.58ce423.png" class="normal">
      </div>
      <b class="close-btn ion-android-close" @click="closeBox"></b>
      <div class="panel">
        <h3 class="title">{{text}}</h3>
        <div class="input-group">
          <div v-if="reg" class="input-box">
            <input v-model="nick" type="text" name="name" placeholder="请输入用户名" class="nick" @blur="moveClass">
          </div>
          <div class="input-box">
            <input v-model="count" v-foc="{setlx:setlx}" @focus="img2" @blur="img1" type="text" name="count" placeholder="请填写手机号或邮箱" class="count">
          </div>
          <div class="input-box">
            <input v-model="paw" @focus="img3" @blur="img1" type="password" name="password" placeholder="请输入密码" class="paw">
          </div>
        </div>
        <button @click="login" class="btn">{{text}}</button>
        <div v-if="!reg" class="prompt-box">没有账号？
          <span @click="change" class="clickable">注册</span>
          <router-link to="/reset-password" class="clickable fr">忘记密码</router-link>
        </div>
        <div v-if="reg" class="prompt-box center">
          <span @click="change" class="clickable">已有账号登陆</span>
        </div>
      </div>
      <div class="third-party">
        <div v-show="isError" class="errormess">{{errMess}}</div>{{handleErr}}
        第三方账号登陆
        <img title="微博" alt="微博" src="//gold-cdn.xitu.io/v3/static/img/weibo.fa758eb.svg" class="third-btn">
        <img title="微信" alt="微信" src="//gold-cdn.xitu.io/v3/static/img/wechat.e0ff124.svg" class="third-btn">
        <img title="GitHub" alt="GitHub" src="//gold-cdn.xitu.io/v3/static/img/github.547dd8a.svg" class="third-btn">
      </div>{{handelReg}}
    </form>
  </div>
</template>
<script>
import Vnav from './Nav.vue';
import $ from 'jquery';
import {encrypt} from '../js/crypto';
import checkStr from '../js/regexp';
export default {
  name: 'modal',
  data() {
    return {
      reg: false,
      focu: true,
      text: '登陆',
      on: 1,
      nick: '',
      count: '',
      paw: '',
      errMess: '',
      isError: false
    }
  },
  methods: {
    closeBox() {
      this.$store.dispatch('closeModal');
    },
    change() {
      this.$store.dispatch('changeBox');
    },
    img1(ev) {
      this.on = 1;
      this.focu = false;
      this.moveClass(ev);
    },
    img2(ev) {
      this.on = 2;
      this.focu = true;
      this.moveClass(ev);
    },
    img3(ev) {
      this.on = 3;
      this.focu = false;
      this.moveClass(ev);
    },
    moveClass(ev) {
      $(ev.currentTarget).removeClass('error');
    },
    login(ev) {
      ev.preventDefault();
      let re=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,16}$/,
          reg=/^\s*$/;
      if(!this.reg){
        if(checkStr(this.count) && re.test(this.paw)){
          let obj={count:this.count,paw:encrypt(this.paw)};
          this.$store.dispatch('loginData',obj);
        }else{
          if(!checkStr(this.count)){
            $('.input-group .count').addClass('error');
          }
          if(!re.test(this.paw)){
            $('.input-group .paw').addClass('error');
          }
        }
      }else{
        if(!reg.test(this.nick) && checkStr(this.count) && re.test(this.paw)){
          console.log('注册');
          let obj={nick: this.nick, count:this.count, paw:encrypt(this.paw)};
          this.$store.dispatch('regData', obj);
        }else{
          if(reg.test(this.nick)){
            $('.input-group .nick').addClass('error');
          }
          if(!checkStr(this.count)){
            $('.input-group .count').addClass('error');
          }
          if(!re.test(this.paw)){
            $('.input-group .paw').addClass('error');
          }
        }
      }    
    },
    setlx() {
      console.log('哈哈哈');
    }
  },
  computed: {
    handelReg() {
      this.reg = this.$store.state.regInput;
      if (this.reg) {
        this.text = '注册';
      } else {
        this.text = '登陆';
      }
    },
    handleErr() {
      console.log(this);
      this.isError = this.$store.state.ifError;
      this.errMess = this.$store.state.errorMessage;
    }
  },
  directives: {
    // 注册一个局部的自定义指令 v-focus
    foc: {
      // 指令的定义,inserted是DOM插入时执行，update是页面有操作的时候就触发
      inserted: function(el, binding, vnode) {
        console.log(vnode.context);
        binding.value.setlx();
        /*if (binding.value)
          el.focus();
        else
          el.blur();*/
        // <div style="position:absolute;width:100px;height:100px;border:1px solid red" v-drag="{set:set}"
      },
      componentUpdated: function(el, binding) {
        /*if (binding.value)
          el.focus();
        else
          el.blur();*/
      }
    }
  }
}

</script>
<style scoped>
.modal-box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, .3);
  z-index: 500;
}

form {
  position: relative;
  padding: 2rem;
  width: 26.5rem;
  max-width: 100%;
  font-size: 1.167rem;
  background-color: #fff;
  border-radius: 2px;
  box-sizing: border-box;
}

.normal {
  position: absolute;
  top: 0;
  left: 50%;
  width: 10rem;
  -webkit-transform: translate(-50%, -83%);
  transform: translate(-50%, -83%);
  z-index: 1;
}

.close-btn {
  float: right;
  cursor: pointer;
  font-size: 1.6rem;
  opacity: .4;
  z-index: 20;
}

.title {
  font-size: 1.5rem;
  margin: 0 0 2rem;
}

.input-group {
  margin-bottom: .5rem;
  overflow: hidden;
}

.input-box {
  position: relative;
  margin-bottom: .8rem;
}

.input-box input {
  padding: 1rem;
  width: 100%;
  border: 1px solid #e9e9e9;
  border-radius: 2px;
  outline: none;
  box-sizing: border-box;
}
.input-box .error{
  border-color: #f00;
}

.input-box input:focus {
  border-color: #007fff;
}

.btn {
  width: 100%;
  height: 3.334rem;
  color: #fff;
  background-color: #007fff;
  border-radius: 2px;
  box-sizing: border-box;
  cursor: pointer;
  -webkit-appearance: none;
  border: none;
  padding: .5rem 1.3rem;
  transition: background-color .3s, color .3s;
}

.prompt-box {
  margin: 1rem 0 0;
  color: #8b9196;
}

.center {
  text-align: center;
}

.prompt-box .clickable {
  color: #007fff;
  cursor: pointer;
}

.third-party {
  position: relative;
  margin-top: 2.3rem;
  font-size: 1rem;
  line-height: 1.9rem;
  color: #8b9196;
}

.third-btn {
  margin-left: 1.2rem;
  height: 1.9rem;
  vertical-align: bottom;
  cursor: pointer;
}
.errormess{
  position: absolute;
  height: 1.2rem;
  line-height: 1.2rem;
  top: -1.6rem;
  font-size: 1rem;
  color: #f00;
}
</style>
