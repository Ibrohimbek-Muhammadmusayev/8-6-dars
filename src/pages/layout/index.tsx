import Sitebar from "./../../components/sitebar.tsx";
import { Outlet } from "react-router-dom";
export default function Layout(){
    const users = window.sessionStorage.getItem('token');
    if (users) {
        return (
            <div> 
                <div className="flex" data-theme='dark'>
                    <Sitebar/>
                    <div className="w-full">
                        <div className="navbar h-[80px] bg-primary-content flex justify-between">
                            <h1 className="font-bold text-[30px] text-white pl-[40px]">hello john 👋</h1>
                            <button className="btn rounded-full">John</button>
                        </div>
                        <div className="flex">
                            <main className="ml-[30px] mt-[30px]">
                                <Outlet/>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        )
    } else {
        window.location.replace('/login')
    }
} 