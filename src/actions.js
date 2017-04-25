import { get, syncGet } from './fetch.js'

export const fetchInitialData = ({servicios}) => {

  //$user.empresas[0].Servicios[n].clientId

  console.log('ACTIONS::fetchInitialData::before_get')
  get({
    url: 'http://api2.tomoturnos.com/api/EditarPerfil/Pendientes/167',
    body: { },
    success: 'FETCH_SUCCESS',
    failure: 'FETCH_FAILURE'
  })
  console.log('ACTIONS::fetchInitialData::after_get')
}

export const asyncFetchInitialData = async ({servicios}) => {

  //$user.empresas[0].Servicios[n].clientId

  console.log('ACTIONS::asyncFetchInitialData::before_get_active_turns')
  const activeTurns = await syncGet({
    url: 'http://api2.tomoturnos.com/api/EditarPerfil/Pendientes/167',
    body: { },
    success: 'FETCH_SUCCESS',
    failure: 'FETCH_FAILURE'
  })
  console.log('ACTIONS::asyncFetchInitialData::after_get_active_turns')

  console.log('ACTIONS::asyncFetchInitialData:before_get_active_calendar')
  const calendar = await syncGet({
    url: 'http://api2.tomoturnos.com/api/EditarPerfil/Pendientes/167',
    body: { },
    success: 'FETCH_SUCCESS',
    failure: 'FETCH_FAILURE'
  })
  console.log('ACTIONS::asyncFetchInitialData:after_get_active_calendar')

  console.log('ACTIONS::asyncFetchInitialData::after_get')

}