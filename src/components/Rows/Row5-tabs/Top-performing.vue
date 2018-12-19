<template>
     <div class="row bg-w m-0">
      <table class="table">
        <thead>
          <tr>
            <th scope="col" class='mid-txt fourty'>Landing Page</th>
            <th scope="col" class='mid-txt twenty'>Sessions</th>
            <th scope="col" class='mid-txt twenty'>Transactions</th>
            <th scope="col" class='mid-txt twenty'>Revenue</th>
          </tr>
        </thead>
        <tbody class='table-data'>
          <tr v-for="(item, index) in topPerforming" :key='index'>
            <th scope="row" class='fourty'>{{index + 1}}.  {{item.name}}</th>
            <td class='twenty'>{{item.sessions.toLocaleString()}}</td>
            <td class='twenty'>{{item.transactions.toLocaleString()}}</td>
            <td class='twenty'>{{item.revenue.toLocaleString()}}</td>
          </tr>
          <tr>
            <td class='fourty'><b>GRAND TOTAL</b></td>
            <td class='twenty'><b>{{calculateTotal[0]}}</b></td>
            <td class='twenty'><b>{{calculateTotal[1]}}</b></td>
            <td class='twenty'><b>{{calculateTotal[2]}}</b></td>
          </tr>
        </tbody>
      </table>
  </div>
</template>

<script>
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

<style>
.fourty {
  width: 40%
}
.twenty {
  width: 20%;
}
</style>

