export default (init, old) => {
  return {
    getCityList: init('/v1/common/get-city-list'),
    getVerifyCode: old('/web/v1/get_verify_code.php')
  }
}
