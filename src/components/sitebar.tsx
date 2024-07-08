import { NavLink } from 'react-router-dom'
export default function Sitebar() {
    return (
        <div className="drawer w-[320px] lg:drawer-open flex justify-start">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                Open drawer
                </label>
            </div>
            <div className="drawer-side">   
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 flex flex-col gap-[10px] text-base-content min-h-full w-80 pr-4" data-theme='dark'>
                    <div className="w-[320px] h-[100px] flex mr-[10px] justify-center items-center">
                        <h1 className="font-bold text-[35px] mx-auto">Admin Dashboard</h1>
                    </div>
                    <li className='max-w-[300px] text-[20px]'><NavLink to={'/'}>Dashboard</NavLink></li>
                    <li className='max-w-[300px] text-[20px]'><NavLink to={'/products'}>Products</NavLink></li>
                </ul>
            </div>
        </div>
    )
}