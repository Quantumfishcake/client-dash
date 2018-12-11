<template>
     <div class="row bg-w m-0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class='mid-txt'>Landing Page</th>
            <th scope="col" class='mid-txt'>Sessions</th>
            <th scope="col" class='mid-txt'>Transactions</th>
            <th scope="col" class='mid-txt'>Revenue</th>
          </tr>
        </thead>
        <tbody class='table-data'>
          <tr v-for="(item, index) in topPerforming" :key='index'>
            <th scope="row" >{{index + 1}}.  {{item.name}}</th>
            <td>{{item.sessions.toLocaleString()}}</td>
            <td>{{item.transactions.toLocaleString()}}</td>
            <td>{{item.revenue.toLocaleString()}}</td>
          </tr>
          <tr>
            <td><b>GRAND TOTAL</b></td>
            <td><b>{{calculateTotal[0]}}</b></td>
            <td><b>{{calculateTotal[1]}}</b></td>
            <td><b>{{calculateTotal[2]}}</b></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
import Vue from 'vue';

export default {
  name: 'TopPerforming',
  computed: {
    topPerforming() {
      return this.$store.state.topPerforming
    },
    calculateTotal () {
      var sessionsTot = 0, transactionsTot = 0, revenueTot = 0
      this.$store.state.topPerforming.forEach((item) => {
        sessionsTot += item.sessions
        transactionsTot += item.transactions
        revenueTot += item.revenue
      })
      return [sessionsTot.toLocaleString(), transactionsTot.toLocaleString(), (Math.round(revenueTot * 10) / 10).toLocaleString()]
    }
  },
}
</script>

