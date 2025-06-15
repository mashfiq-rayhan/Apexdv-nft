// import { Box, Icon, Stack, Tab, Tabs, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styles from './RecentWorks.module.css';
import { useRouter } from 'next/router';



const Portfolios = (props) => {

  const router = useRouter();

  const APEXDV = (
    // <Icon sx={{ m: '1px' }}>
      <img alt="edit" src="/images/Portfolios/Icons/apexdv.svg" style={{ margin: '1px', height: '24px', width: '24px' }} />
    // </Icon>
  );
  const WEBSITE = (
    // <Icon sx={{ m: '1px' }}>
      <img alt="edit" src="/images/Portfolios/RecentWorks/website.svg" style={{ margin: '1px', height: '24px', width: '24px' }} />
    // </Icon>
  );
  const APP = (
    // <Icon sx={{ m: '1px' }}>
      <img alt="edit" src="/images/Portfolios/RecentWorks/app.svg" style={{ margin: '1px', height: '24px', width: '24px' }} />
    // </Icon>
  );
  const SOFTWARE = (
    // <Icon sx={{ m: '1px' }}>
      <img alt="edit" src="/images/Portfolios/RecentWorks/software.svg" style={{ margin: '1px', height: '24px', width: '24px' }} />
    // </Icon>
  );

  const tabData = [[APEXDV,'All Works'],[WEBSITE,'Website'],[APP,'Mobile App'],[SOFTWARE,'Software Development']]

  const [active, setActive] = useState(tabData[0][1]);

  // A string blocknative have to added in the follwing 4 arrays when blocknative page will be added
  const allWorks = ['aota','coinzoom','cryptominium','enjin','galaxy','homebase','horizen','impostors','luna','paraswap','paritex'];
  const website = ['galaxy','homebase','horizen','impostors','luna','paraswap','paritex','aota','coinzoom','cryptominium','enjin'];
  const apps = ['enjin','galaxy','homebase','aota','coinzoom','cryptominium','horizen','impostors','luna','paraswap','paritex'];
  const softwares = ['homebase','horizen','impostors','aota','coinzoom','cryptominium','enjin','galaxy','luna','paraswap','paritex'];

  const handleChange = (e, val) => {
    setActive(val);
  }

  useEffect(() => {
    document.getElementById("imgWrappper").scrollBy(5700, 0);
  }, []);

  const handleAllWorks = (event,work) => {
    if (work === 'aota') { router.push('https://apexdv.com/portfolio-aota'); } 
    else if (work === 'coinzoom') { router.push('https://apexdv.com/portfolio-coinzoom');} 
    else if (work === 'cryptominium') { router.push('https://apexdv.com/portfolio-cryptominium');} 
    else if (work === 'enjin') { router.push('https://apexdv.com/portfolio-enjin');} 
    else if (work === 'galaxy') { router.push('https://apexdv.com/portfolio-galaxy');} 
    else if (work === 'homebase') { router.push('https://apexdv.com/portfolio-homebase');} 
    else if (work === 'horizen') { router.push('https://apexdv.com/portfolio-horizen');} 
    else if (work === 'impostors') { router.push('https://apexdv.com/portfolio-impostors');} 
    else if (work === 'luna') { router.push('https://apexdv.com/portfolio-luna');} 
    // else if (work === 'blocknative') { router.push('https://apexdv.com/portfolio-blocknative');} 
    else if (work === 'paraswap') { router.push('https://apexdv.com/portfolio-paraswap');} 
    else if (work === 'paritex') { router.push('https://apexdv.com/portfolio-paritex');} 
    else { router.push('/');}
  }
  // const handleWebsite = (event,web) => {
  //   if (web === 'aota') { router.push('/portfolio-aota'); } 
  //   else if (web === 'coinzoom') { router.push('/portfolio-coinzoom');} 
  //   else if (web === 'cryptominium') { router.push('/portfolio-cryptominium');} 
  //   else if (web === 'enjin') { router.push('/portfolio-enjin');} 
  //   else if (web === 'galaxy') { router.push('/portfolio-galaxy');} 
  //   else if (web === 'homebase') { router.push('/portfolio-homebase');} 
  //   else if (web === 'horizen') { router.push('/portfolio-horizen');} 
  //   else if (web === 'impostors') { router.push('/portfolio-impostors');} 
  //   else if (web === 'luna') { router.push('/portfolio-luna');} 
  //   // else if (web === 'blocknative') { router.push('/portfolio-blocknative');} 
  //   else if (web === 'paraswap') { router.push('/portfolio-paraswap');} 
  //   else if (web === 'paritex') { router.push('/portfolio-paritex');} 
  //   else { router.push('/');}
  // }
  // const handleApps = (event,app) => {
  //   if (app === 'aota') { router.push('/portfolio-aota'); } 
  //   else if (app === 'coinzoom') { router.push('/portfolio-coinzoom');} 
  //   else if (app === 'cryptominium') { router.push('/portfolio-cryptominium');} 
  //   else if (app === 'enjin') { router.push('/portfolio-enjin');} 
  //   else if (app === 'galaxy') { router.push('/portfolio-galaxy');} 
  //   else if (app === 'homebase') { router.push('/portfolio-homebase');} 
  //   else if (app === 'horizen') { router.push('/portfolio-horizen');} 
  //   else if (app === 'impostors') { router.push('/portfolio-impostors');} 
  //   else if (app === 'luna') { router.push('/portfolio-luna');} 
  //   // else if (app === 'blocknative') { router.push('/portfolio-blocknative');} 
  //   else if (app === 'paraswap') { router.push('/portfolio-paraswap');} 
  //   else if (app === 'paritex') { router.push('/portfolio-paritex');} 
  //   else { router.push('/');}
  // }
  // const handleSoftwares = (event,software) => {
  //   if (software === 'aota') { router.push('/portfolio-aota'); } 
  //   else if (software === 'coinzoom') { router.push('/portfolio-coinzoom');} 
  //   else if (software === 'cryptominium') { router.push('/portfolio-cryptominium');} 
  //   else if (software === 'enjin') { router.push('/portfolio-enjin');} 
  //   else if (software === 'galaxy') { router.push('/portfolio-galaxy');} 
  //   else if (software === 'homebase') { router.push('/portfolio-homebase');} 
  //   else if (software === 'horizen') { router.push('/portfolio-horizen');} 
  //   else if (software === 'impostors') { router.push('/portfolio-impostors');} 
  //   else if (software === 'luna') { router.push('/portfolio-luna');} 
  //   // else if (software === 'blocknative') { router.push('/portfolio-blocknative');} 
  //   else if (software === 'paraswap') { router.push('/portfolio-paraswap');} 
  //   else if (software === 'paritex') { router.push('/portfolio-paritex');} 
  //   else { router.push('/');}
  // }

  return (
    <div className={styles.OurPortfolio}>
      <h2>Our PortFolio</h2>
      {/* <Stack sx={{ justifyContent: 'space-around', alignItems: 'center', p: '50px 100px 50px 100px' }}>
        <Stack>
        <Typography sx={{ p: '30px', fontFamily: 'Teko', fontWeight: '400', fontSize:{xs:'32px',md:'64px'}, lineHeight:{xs:'40px',md:'64px'} }} variant='h2' component='h2'>Our Portfolio</Typography>
        </Stack>
        <Stack sx={{ flexDirection: 'row' }}>
          <Box>
            <Tabs wrapped sx={{ maxWidth: {xs: '310px', sm:'100%' }, }} variant={"scrollable"} TabIndicatorProps={{style: {backgroundColor: "#1CAF83", color:'"#1CAF83"'}}} scrollButtons={"on"} value={active} onChange={handleChange} >
              {tabData.map(([icon,link,iconactv]) => <Tab key={icon} className={styles.tab} icon={icon} iconPosition="start" value={link} label={link} />)}
            </Tabs>
          </Box>
        </Stack>
      </Stack> */}
      <div className="container-fluid">
        <div className="row">
          <div id='imgWrappper' className={styles.imageWrapper}>
            {active === 'All Works' ? (allWorks.map(work => (
              <div key={work} className={styles.image} onClick={event => handleAllWorks(event, work)}>
              <Image
                src={`/images/Portfolios/${work}.png`}
                alt={work}
                width={500}
                height={400}
              />
            </div>
            ))): null}
            {/* {active === 'Website' ? (website.map(web => (
              <div key={web} className={styles.image} onClick={event => handleWebsite(event, web)}>
              <Image
                src={`/images/Portfolios/${web}.png`}
                alt={web}
                width={500}
                height={400}
              />
            </div>
            ))): null}
            {active === 'Mobile App' ? (apps.map(app => (
              <div key={app} className={styles.image} onClick={event => handleApps(event, app)}>
              <Image
                src={`/images/Portfolios/${app}.png`}
                alt={app}
                width={500}
                height={400}
              />
            </div>
            ))): null}
            {active === 'Software Development' ? (softwares.map(software => (
              <div key={software} className={styles.image} onClick={event => handleSoftwares(event, software)}>
              <Image
                src={`/images/Portfolios/${software}.png`}
                alt={software}
                width={500}
                height={400}
              />
            </div>
            ))): null} */}
          </div>
        </div>
      </div>
      {/* <Stack sx={{ justifyContent: 'space-around', alignItems: 'center', p: '50px 100px 50px 100px' }}>
        <Stack sx={{ m: '75px 0px 0px 0px' }}>
          <button className={styles.button2} >
            <a href="/portfolio">View Our Portfolio</a>
          </button>
        </Stack>
      </Stack> */}
    </div>
  )
}

export default Portfolios;