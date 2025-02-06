import { BsFillHouseAddFill, BsGraphUp } from 'react-icons/bs';
import { FaUserCog } from 'react-icons/fa';
import MenuItem from './MenuItem';
const AdminMenu = () => {
    return (
        <>
            <MenuItem icon={BsGraphUp} label='All Products' address='products' />
            <MenuItem icon={FaUserCog} label='All Users' address='users' />
            <MenuItem icon={BsFillHouseAddFill} label='Add Products' address='add-product'
            />
        </>
    )
}

export default AdminMenu