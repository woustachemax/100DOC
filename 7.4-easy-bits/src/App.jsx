
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import './App.css'
import { jobAtom, messageAtom, networkAtom, notificationAtom } from './atoms'

function App() {
  return <RecoilRoot>
    <MainApp/>
  </RecoilRoot>
  
 
}


function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobNotificationCount = useRecoilValue(jobAtom);
  const [messageNotificationCount, setMessageNotificationCount] = useRecoilState(messageAtom);
  const notificationCount =  useRecoilValue(notificationAtom);

  return (
    <>
    <button>Home</button>
    
    <button>My Network ({networkNotificationCount > 100 ? "99+" : networkNotificationCount})</button>
    <button>Jobs ({jobNotificationCount})</button>
    <button>Messaging ({messageNotificationCount})</button>
    <button>Notifications ({notificationCount})</button>
    
    <button onClick={() =>(setMessageNotificationCount(messageNotificationCount+1))}>Me</button>

    
    </>
  )

}
export default App
