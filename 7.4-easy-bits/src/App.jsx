import { RecoilRoot, useRecoilValue } from 'recoil'
import './App.css'
import { jobAtom, messageAtom, networkAtom, notificationAtom, notificationSelector } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
 
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const messageNotificationCount= useRecoilValue(messageAtom);
  const notificationCount =  useRecoilValue(notificationAtom);
  const meCount = useRecoilValue(notificationSelector)

  return (
    <>
    <button>Home</button>
    
    <button>My Network ({networkNotificationCount > 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobNotificationCount})</button>
    <button>Messaging ({messageNotificationCount})</button>
    <button>Notifications ({notificationCount})</button>
    
    <button>Me({meCount})</button>

    
    </>
  )

}
export default App
