import {
  AlertTriangle,
  CheckCircle2,
  Info,
  Bell,
} from "lucide-react";
import { useEffect, useState } from "react";
import { getNotifications } from "../../services/notificationService";
export default function NotificationList() {

  const [notifications, setNotifications] = useState([]);

useEffect(() => {
  getNotifications()
    .then((data) => setNotifications(data.notifications))
    .catch(console.error);
}, []);
  

  return (

    <div className="bg-slate-900 border border-slate-700 rounded-2xl p-6">

      <h2 className="text-2xl font-bold mb-6">

        Notification Feed

      </h2>

      <div className="space-y-5">

        {notifications.map((item,index)=>(

          <div
            key={index}
            className="bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-cyan-500 transition"
          >

            <div className="flex justify-between">

              <div className="flex gap-4">

                <div className="bg-cyan-500/20 p-3 rounded-xl">
  <Bell size={22} className="text-cyan-400" />
</div>

                <div>

                  <h3 className="font-semibold text-lg">

                    {item.title}

                  </h3>

                  <p className="text-slate-400 mt-2">
  AI Generated Notification
</p>

                </div>

              </div>

              <div className="text-right">

                <span className={`${item.color} px-3 py-1 rounded-full text-sm`}>

                  {item.priority}

                </span>

                <p className="text-slate-500 text-sm mt-3">

                  Live

                </p>

              </div>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}