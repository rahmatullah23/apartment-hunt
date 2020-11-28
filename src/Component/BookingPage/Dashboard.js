import React, {useContext} from 'react';
import { UserContext } from '../../App';
import Sidebar from './Sidebar/Sidebar';
import Allrent from './Allrent/Allrent';
import { useSelector } from 'react-redux';

const Dashboard = () => {
    const [user] = useContext(UserContext);
    const height = {minHeight : '100vh'};
    const Display = useSelector(state => state.counterReducer);
    const whichType = typeof Display == 'function';

    return (
        <section id="dashboard">
            <nav className="bg-white p-3">
                <h4 className="text-right"><b>{user.name}</b></h4>
            </nav>
            <div className="row mx-0">
                <div className="col-12 col-lg-3">
                    <Sidebar email={user.email} />
                </div>
                <div style={height} className="col-12 col-lg-9 right bg-light">
                    {whichType ? <Allrent /> : Display}
                </div>
            </div>
        </section>
    );
};

export default Dashboard;