import React, { useState } from 'react';
import styles from '../../styles/ipad.module.css';
import Front from '../../components/ipadFront';
import Back from '../../components/ipadBack';
import { Divider, Icon, Segment, Modal, Grid, Button, Sticky } from 'semantic-ui-react';
import Head from 'next/head';

function grayipad () {
    const [storageModal, setStorageModal] = useState(false);
    const [connectivityModal, setConnectivityModal] = useState(false);

    return (
        <>
            <Head>
                <title>Space Gray iPad Air</title>
                <meta name="description" content="space gray" />
            </Head>
            <Sticky>
                <div style={{ position: 'relative', top: '0px', zIndex: '5' }}>
                    <div style={{ height: '45px', background: 'linear-gradient(to bottom, #e8faff, white)' }}>
                        <span style={{ fontSize: '20px', fontWeight: '500', display: 'flex', justifyContent: 'flex-start', transform: 'translate(18px, 12px)' }}>
                            iPad Air
                        </span>
                        <span style={{ fontSize: '15px', display: 'flex', justifyContent: 'flex-end', transform: 'translate(-20px, -9px)' }}>
                            From $599 or $49.91/mo. for 12 mo.*
                        </span>
                        <Divider style={{ transform: 'translateY(-10px)' }} />
                    </div> 
                </div>
            </Sticky>
            <Grid>
                <Grid.Column style={{ width: '20vw' }}>
                    &nbsp;
                </Grid.Column>
                <Grid.Column style={{ width: '35vw' }}>
                    <div style={{ transform: 'translate(9em, 60px)', position: 'fixed' }}>
                        <div style={{ position: 'relative', zIndex: '1' }}>
                            <Front/>
                        </div>
                        <div style={{ transform: 'translate(-385px, -620px)', position: 'relative', zIndex: '0' }}>
                            <Back />
                        </div>
                    </div>
                    <div style={{ transform: 'translate(100px, 600px)', position: 'fixed' }}>
                        <div style={{ transform: 'translate(-488px, 50px)' }}>
                            <b>
                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px' }}>
                                    Get free delivery, or pick up
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px', transform: 'translateY(-5px)' }}>
                                    available items at an
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px', transform: 'translateY(-10px)' }}>
                                    Apple Store
                                </div>
                            </b>
                            <b>
                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px', transform: 'translate(185px, -60px)' }}>
                                    Free personal engraving
                                </div>
                            </b>
                            <b>
                                <div style={{ display: 'flex', justifyContent: 'center', fontSize: '10px', transform: 'translate(359px, -80px)' }}>
                                    Free and easy returns
                                </div>
                            </b>
                        </div>
                        <div style={{ transform: 'translate(105px, 0px)' }}>
                            <Divider style={{ width: '1000px', transform: 'translate(-500px)' }} />
                            <Icon
                                name="chat"
                                size="large"
                            />
                            <div style={{ transform: 'translate(30px, -30px)', fontSize: '10px' }}>
                                <div>
                                    Have questions about buying an iPad?
                                </div>
                                <div>
                                    <a style={{ color: 'rgb(0, 102, 204)', fontSize: '10px', cursor: 'pointer' }}>
                                        Chat with an iPad Specialist
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </Grid.Column>
                <Grid.Column style={{ width: '25vw' }}>
                    <Segment style={{ width: '100%', borderStyle: 'hidden' }}>
                        <div>
                            <div style={{ color: 'red' }}>
                                New
                            </div>
                            <h1 style={{ margin: '0em 0em 1em 0em' }}>
                                Buy iPad Air
                            </h1>
                            <Divider />
                            <div>
                                Color Change
                            </div>
                            <Divider />
                            <h3>
                                Storage
                            </h3>
                            <div>
                                <b>Plan ahead. Leave room for later.</b> The more storage your iPad Air has, the more room you have to store digital content, now and in the future.
                                <Icon
                                    name="info circle"
                                    color="blue"
                                    size="medium"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setStorageModal(true)}
                                />
                            </div>
                            <Modal open={storageModal} dimmer="blurring" size="small" style={{ transform: 'translateY(-280px)', borderRadius: '20px', width: '100vw', height: '70vh', position: 'fixed' }}>
                                    <Button 
                                        content="X" 
                                        style={{ borderRadius: '50%' }}
                                        onClick={() => setStorageModal(false)}
                                    />
                                <div style={{ padding: '5em' }}>
                                    <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                                        Make room for everything. 
                                    </h1>
                                    <div>
                                        How much storage you need depends on how you use your iPad. More room means you can store more apps, music, movies, and books. It also lets you create and store images, videos, illustrations, and more.
                                    </div>
                                    <div style={{ margin: '1em 0em 0em 0em' }}>
                                        Over time you may add more content to your iPad, so you’ll want to think about how your storage needs may change.
                                    </div>
                                    <h5 style={{ color: 'gray', fontWeight: 'lighter' }}>
                                        Storage is measured in gigabytes (GB) and terabytes (TB).
                                    </h5>
                                    <h5 style={{ color: 'gray', fontWeight: 'lighter' }}>
                                        Note: Available space is less and varies due to many factors. A standard configuration uses approximately 12GB to 17GB of space, including iPadOS 15 with its latest features and Apple apps that can be deleted. Apple apps that can be deleted use about 4.5GB of space, and you can download them back from the App Store. Storage capacity subject to change based on software version, settings, and iPad model.
                                    </h5>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <b>Have questions about buying an iPad?</b>
                                    </div>
                                    <div style={{ display: 'flex', justifyContent: 'center' }}>
                                        <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Chat with an iPad Specialist</a>
                                    </div>
                                </div>
                            </Modal>
                            <span style={{ display: 'flex', justifyContent: 'center' }}>
                                <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '15em', height: '10em', background: 'transparent', margin: '0em .5em 0em 0em' }}>
                                    <h2 style={{ margin: '0em' }}>64GB</h2>
                                    <h5 style={{ margin: '0em', transform: 'translate(33px, -28px)'}}>1</h5>
                                    <h5 style={{ margin: '0em' }}>From $599</h5>
                                    <h5 style={{ margin: '0em' }}>or $49.91/mo. for 12 mo.*</h5>
                                </button>
                                <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '15em', height: '10em', background: 'transparent', margin: '0em 0em 0em .5em' }}>
                                    <h2 style={{ margin: '0em' }}>156GB</h2>
                                    <h5 style={{ margin: '0em', transform: 'translate(40px, -28px)'}}>1</h5>
                                    <h5 style={{ margin: '0em' }}>From $749</h5>
                                    <h5 style={{ margin: '0em' }}>or $62.41/mo. for 12 mo.*</h5>
                                </button>
                            </span>
                            <Divider />
                            <h3>
                                Connectivity
                            </h3>
                            <div>
                                <b>Two fast ways to stay connected.</b> Every iPad Air can connect to a Wi-Fi network. A Wi-Fi + Cellular model allows you to stay connected when Wi-Fi isn’t available.
                                <Icon
                                    name="info circle"
                                    color="blue"
                                    size="medium"
                                    style={{ cursor: 'pointer' }}
                                    onClick={() => setConnectivityModal(true)}
                                />
                            </div>
                            <span style={{ display: 'flex', justifyContent: 'center' }}>
                                <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '15em', height: '10em', background: 'transparent', margin: '0em .5em 0em 0em' }}>
                                    <h2 style={{ margin: '0em' }}>Wi-Fi</h2>
                                    <h5 style={{ margin: '0em' }}>From $599</h5>
                                    <h5 style={{ margin: '0em' }}>or $49.91/mo. for 12 mo.*</h5>
                                </button>
                                <button style={{ borderRadius: '10px', border: '.5px solid gray', width: '15em', height: '10em', background: 'transparent', margin: '0em 0em 0em .5em' }}>
                                    <h2 style={{ margin: '0em' }}>Wi-Fi + Cellular</h2>
                                    <h5 style={{ margin: '0em' }}>From $749</h5>
                                    <h5 style={{ margin: '0em' }}>or $62.41/mo. for 12 mo.*</h5>
                                </button>
                            </span>
                            <Modal open={connectivityModal} dimmer="blurring" size="small" style={{ transform: 'translateY(20px)', borderRadius: '20px', width: '100vw', height: '92vh', position: 'fixed' }}>
                                <Button 
                                    content="X" 
                                    style={{ borderRadius: '50%' }}
                                    onClick={() => setConnectivityModal(false)}
                                />
                                <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                                    A faster wireless connection with Wi-Fi 6.
                                </h1>
                                <div style={{ margin: '0em 0em 2em 0em' }}>
                                    iPad Air supports Wi-Fi 6 technology for a fast connection to Wi-Fi networks in your home, a coffee shop, the school library, or an airport.
                                </div>
                                <h1 style={{ display: 'flex', justifyContent: 'center' }}>
                                    Stay connected anywhere with cellular data.
                                </h1>
                                <ul>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        If you’re someplace where there’s no Wi-Fi, an iPad Air with Wi-Fi + Cellular lets you stay connected to fast cellular data networks.
                                    </li>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        eSIM lets you easily set up a cellular connection right from your iPad, with no long-term commitment.* Or you can simply insert a carrier-activated SIM card.
                                    </li>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        Browse the web, send email and messages, access your files, and more. All on the go.
                                    </li>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        Stay in touch with friends and family. Or collaborate with coworkers.
                                    </li>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        Get blazing-fast 5G and LTE coverage from select carriers.
                                    </li>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        Add cellular data when you travel, and stay connected in over 180 countries and regions.
                                    </li>
                                    <li style={{ margin: '0em 0em 1em 0em' }}>
                                        Choose from a variety of carrier partners or add to your existing plan.
                                    </li>
                                </ul>
                                <h5 style={{ color: 'gray', fontWeight: 'lighter' }}>
                                    Not all carriers support Apple SIM and eSIM. See your carrier for more details. Not available in China mainland. The eSIM technology works with iPad Pro 11‑inch (1st generation or later), iPad Pro 12.9‑inch (3rd generation or later), iPad Air (3rd generation or later), iPad (7th generation or later), and iPad mini (5th generation or later). Apple SIM works with iPad Pro 12.9-inch (1st and 2nd generation), iPad Pro 9.7-inch, iPad Pro 10.5‑inch, iPad (5th and 6th generation), iPad Air 2, iPad mini 3, and iPad mini 4.
                                </h5>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <b>Have questions about buying an iPad?</b>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Chat with an iPad Specialist</a>
                                </div>
                            </Modal>
                            {/* <Divider /> */}
                            <h3>
                                Personalize your device
                            </h3>
                            <div style={{ margin: '3em 0em 0em 0em' }}>
                                <b>Personalize your iPad Air for free. </b>Engrave a mix of emoji, names, initials, and numbers to make iPad Air unmistakably yours. Only at Apple.
                            </div>
                            <div style={{ margin: '2em 0em 0em 0em', display: 'flex', justifyContent: 'center' }}>
                                <button style={{ borderRadius: '15px', border: '.5px solid gray', width: '60em', height: '7em', background: 'transparent' }}>
                                    <h3 style={{ display: 'flex', justifyContent: 'flex-start', margin: '0em 0em 0em 1em', transform: 'translateY(10px)' }}>Add Engraving</h3>
                                    <h5 style={{ display: 'flex', justifyContent: 'flex-end', margin: '0em 1em 0em 0em', transform: 'translateY(-10px)' }}>Free</h5>
                                </button>
                            </div>
                            <div style={{ margin: '1em 0em 0em 0em', display: 'flex', justifyContent: 'center' }}>
                                <button style={{ borderRadius: '15px', border: '.5px solid gray', width: '60em', height: '7em', background: 'transparent' }}>
                                    <h3 style={{ display: 'flex', justifyContent: 'flex-start', margin: '0em 0em 0em 1em' }}>No Engraving</h3>
                                </button>
                            </div>
                            <Divider />
                            <h1 style={{ fontWeight: '500' }}>
                                $599.00
                            </h1>
                            <div>
                                or
                            </div>
                            <h1 style={{ fontWeight: '500' }}>
                                $49.91/mo. for 12 mo.*
                            </h1>
                            <div>
                                <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Learn how to pay monthly at 0% APR when you choose Apple Card Monthly Installments</a>
                            </div>
                            <Divider />
                            <h3>
                                <b>Protect your new iPad Air.</b>
                            </h3>
                            <div>
                                <Icon
                                    name="apple"
                                    color="red"
                                />
                                <b>AppleCare+</b>
                            </div>
                            <div>
                                <b>$79.00 or $3.99/mo.</b>
                            </div>
                            <div>
                                Protect your iPad, Apple Pencil, and Apple-branded keyboard from accidental drops and spills with AppleCare+.
                            </div>
                            <div>
                                <a style={{ color: 'rgb(0, 102, 204)', cursor: 'pointer' }}>Learn more</a>
                            </div>
                            <h3>
                                Apple Trade-in
                            </h3>
                            <b>
                                <Icon 
                                    name="random"
                                />
                                Apple Trade In
                            </b>
                            <div>
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Get up to $655 in credit when you trade in your iPad.
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'center' }}>
                                <button style={{ margin: '2em 0em 2em 0em', color: 'white', background: '#0066CC', border: '0px', borderRadius: '10px', width: '80vw', height: '38px' }}>
                                    Continue
                                </button>
                            </div>
                            
                            <div>
                                <b>Still deciding?</b>
                            </div>
                            <div>
                                Add this item to a list and easily come back to it later.
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <Icon
                                name="bookmark outline"
                                size="large"
                                color="blue"
                                style={{ transform: 'translateY(-32px) scale(1, 1.5)' }}
                            />
                            </div>
                        </div>
                    </Segment>
                </Grid.Column>
                <Grid.Column style={{ width: '20vw' }}>
                    &nbsp;
                </Grid.Column>
            </Grid>
        </>
    );
}

export default grayipad;
