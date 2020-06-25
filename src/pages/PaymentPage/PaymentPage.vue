<template>
  <q-page>
    <div class="row q-gutter-md justify-center">
      <revisao-ingressos />
      <credit-card-form />
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
