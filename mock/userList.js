const userList = [{
  id: 1,
  professionId: '230000',
  job: '教师'
}, {
  id: 2,
  professionId: '240000',
  job: '医生'
}, {
  id: 3,
  professionId: '250000',
  job: '公务员'
}]

export default {
  'get|/api/query/user': option => {
    return {
      status: 200,
      message: 'success',
      data: userList
    }
  }
}
