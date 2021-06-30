import PropTypes from 'prop-types';
import { useState } from 'react';
import { auth } from '../../database/firebase';
import styles from './Navigation.module.css';

const Navigation = ({ onPageChange, pages, user }) => {
    const [cl, setCl] = useState('');

    const hideEl = () => {
        if (cl != 'active') {
            setCl('active');
        } else {
            setCl('');
        }
    };

    return (
        <nav className={styles.nav}>
            <div className={styles.logoWrap}>
                <h2 className={styles.logo}>
                    Reac<span className={styles.boldText}>TT</span>ranslate
                </h2>
            </div>
            {user ? (
                <div className={styles.navigation}>
                    <ul className={styles.ulLeft}>
                        <li className={styles.li}>
                            <a
                                className={`${styles.a} ${pages.Home ? 'active' : ''}`}
                                onClick={() => onPageChange('Home')}>
                                Home
                            </a>
                        </li>
                        <li className={styles.li}>
                            <a
                                className={`${styles.a} ${pages.Dictionaries ? 'active' : ''}`}
                                onClick={() => onPageChange('Dictionaries')}>
                                Dictionaries
                            </a>
                        </li>
                    </ul>
                    <ul className={styles.ulRight}>
                        <img className={styles.userImg} src={user.photoURL}></img>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-caret-down-fill"
                            id={styles.arrowDown}
                            viewBox="0 0 16 16"
                            onClick={hideEl}>
                            <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z" />
                        </svg>
                        <div className={`dropDown ${cl}`}>
                            <div className={styles.dropBox} id={styles.topDrop}>
                                <p className={styles.displayName}>{user.displayName}</p>
                                <p className={styles.email}>{user.email}</p>
                            </div>
                            <div className={styles.dropBox}>
                                <button className={styles.logout} onClick={() => auth.signOut()}>
                                    Logout
                                </button>
                            </div>
                        </div>
                    </ul>
                </div>
            ) : (
                ''
            )}
        </nav>
    );
};

Navigation.propTypes = {
    onPageChange: PropTypes.func.isRequired,
    pages: PropTypes.object.isRequired
};

export default Navigation;
