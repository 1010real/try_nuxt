<template>
  <div>
    <v-app>
      <v-content>
        <!-- : は v-bind: と同じ -->
        <v-btn
          class="ma-2"
          color="primary" 
          :loading="loading"
        >
          ローディングボタン
        </v-btn>
        <!-- @ は v-on: と同じ @click = onclick -->
        <v-btn
          class="ma-2"
          color="secondary"
          @click.stop="show = true"
        >
          ダイアログオープン！
        </v-btn>
        <v-dialog v-model="show">
          <v-card>
            ダイアログだよ
          </v-card>
        </v-dialog>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: true,
      show: false
    }
  }
}
</script>