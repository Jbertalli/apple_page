import Back from '../../components/ipadBack2';
import Front from '../ipadFront';
import styles from '../../styles/ipad.module.css';
import Sidebar from '../sidebar';
import Heading from '../heading';
import Footing from '../footing';
import { Grid, Icon } from 'semantic-ui-react';

export default function Gray () {
    
    return (
        <>
            <div>
                <Heading />
                <Grid>
                    <Grid.Column>
                        &nbsp;
                    </Grid.Column>
                    <Grid.Column style={{ width: '450px', transform: 'translateX(241px)' }}>
                        <div style={{ transform: 'translate(9em, 68px)', position: 'fixed' }}>
                            <div style={{ position: 'relative', zIndex: '1', transform: 'scaleX(0.98)' }}>
                                <Front />
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '0', transform: 'translate(-90px, -520px)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)' }}>
                                    <Back />
                                </div>
                            </div>
                        </div>
                        <Footing />




                        
                        <div style={{ transform: 'translate(0px, 800px) scale(0.6)' }}>
                            <div style={{ position: 'relative', zIndex: '1', transform: 'scaleX(1)' }}>
                                <div className={styles.hidden} style={{ transform: 'translate(-73px, 108px) rotate(40deg)', position: 'relative', zIndex: '6' }}>
                                    <Front />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #ADD8E6, #74D7F7)', position: 'relative', zIndex: '0', transform: 'translate(-14px, -120px) rotate(280deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 5 }}>
                                    <Back />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #F9F3EE, #E3C5AC)', position: 'relative', zIndex: '0', transform: 'translate(-110px, -370px) rotate(340deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 4 }}>
                                    <Back /> 
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #B8AFE6, #7867C7)', position: 'relative', zIndex: '0', transform: 'translate(-390px, -844px) rotate(40deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 3 }}>
                                    <Back />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #a7adba, #343d46)', position: 'relative', zIndex: '0', transform: 'translate(-570px, -1580px) rotate(100deg)' }}>
                                <div style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 2 }}>
                                    <Back />
                                </div>
                            </div>
                            <div className={styles.frame} style={{ background: 'linear-gradient(to bottom, #FAE0D8, #fAB19B)', position: 'relative', zIndex: '0', transform: 'translate(-475px, -2370px) rotate(160deg)' }}>
                                <div className={styles.hidden2} style={{ transform: 'translate(-301px, 419.7px)', position: 'relative', zIndex: 1 }}>
                                    <Back />
                                </div>
                            </div>
                        </div>



                        
                    </Grid.Column>
                    <Grid.Column style={{ transform: 'translate(-24px)' }}>
                        <Sidebar />
                    </Grid.Column>
                    <Grid.Column>
                        &nbsp;
                    </Grid.Column>
                </Grid>
            </div>
        </>
    );
}
