<template>
  <q-page>
    <div class="row q-gutter-md justify-center">
      <revisao-ingressos class="col-md-11 col-xs-12"/>
      <credit-card-form class="col-md-11 col-xs-12"/>
    </div>
  </q-page>
</template>

<script>
import RevisaoIngressos from '../../components/RevisaoIngressos/RevisaoIngressos'
import CreditCardForm from '../../components/RevisaoIngressos/FormsIngressos/CreditCardForm/CreditCardForm'
export default {
  name: 'PaymentPage',
  components: {
    RevisaoIngressos,
    CreditCardForm
  }

}
</script>

<style>

</style>
