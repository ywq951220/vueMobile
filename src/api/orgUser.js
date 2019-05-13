import {axios} from 'axios'

export function getListOrgUserByName(data) {
  return axios({
    url: 'orgUser/getListOrgUserByName',
    method: 'post',
    data: data
  })
}

export function getListContactsByName(data) {
  return axios({
    url: 'contacts/getListContactsByName',
    method: 'post',
    data: data
  });
}


