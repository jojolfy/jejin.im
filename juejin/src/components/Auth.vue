<template>
    <section class="auth-section shadow">
      <header class="auth-head">掘金 · 一个帮助开发者成长的社区，立即加入：</header>
      <ul class="auth-list">
        <li>
          <button class="auth-btn weibo">
            <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/weibo.6d23ea3.svg">
            <span>使用微博登录</span>
          </button>
        </li>
        <li>
          <button class="auth-btn wechat">
            <img class="icon" src="///gold-cdn.xitu.io/v3/static/img/wechat.6f45976.svg">
            <span>使用微信登录</span>
          </button>
        </li>
        <li>
          <button class="auth-btn github">
            <img class="icon" src="//gold-cdn.xitu.io/v3/static/img/github.27724f9.svg">
            <span>使用 GitHub 登录</span>
          </button>
        </li>
        <li>
          <button class="auth-btn register">
            <span>邮箱 / 手机注册</span>
          </button>
        </li>
      </ul>
      <div class="user-company-box">
        <div class="tittle">这些大厂的工程师也在用掘金</div>
        <img class="user-company" src="//gold-cdn.xitu.io/v3/static/img/user-company.c6a25da.png">
      </div>
    </section>
</template>

<script>
export default {
  name: 'auth',
  data () {
    return {
      
    }
  }
}
</script>

<style scoped>
  
</style>
