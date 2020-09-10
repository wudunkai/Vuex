<template>
  <div class="hello">
    <h3>{{$store.state.count}}</h3>
    <div>
      <button @click="handleAddClick(10)">增加</button>
      <button @click="handleReduceClick(10)">减少</button>
    </div>
    <div>异步操作</div>
    <div>
      <button @click="handleActionsAdd(10)">异步增加</button>
      <button @click="handleActionsReduce(10)">异步减少</button>
    </div>
    <h4>{{count}}</h4>
  </div>
</template>
<script>
import * as Cookies from 'js-cookie'
// import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods:{
    // ...mapMutations({
    //   handleAddClick: 'mutationsAddCount',
    //   handleReduceClick: 'mutationsReduceCount'
    // }),
    // ...mapActions({
    //   handleActionsAdd: 'actionsAddCount',
    //   handleActionsReduce: 'actionsReduceCount'
    // })
    // // mutations
    handleAddClick(n){
      this.$store.commit('mutationsAddCount',n);
    },
    handleReduceClick(n){
      this.$store.commit('mutationsReduceCount',n);
    },
    // actions
    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    },
  },
  mounted(){
    console.log(Cookies.get('vuex'))
  },
  computed:{
    count(){
      return this.$store.state.count1 
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
