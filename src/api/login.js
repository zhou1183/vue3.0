import service from '../utils/request'

export const login = (data) => {
  return service({ 
    url: '/api/auth/basicLogin',
    method: 'post',
    data
  })
}
