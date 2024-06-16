import React, { useState } from 'react';

import Page1List from './project/problum1/Page1List';
import Page2List from './project/problum2/Page2List';
import Page3List from './project/problum3/Page3List';
import Page4List from './project/problum4/Page4List';


const problemList = [
    {   
        number: 1,
        question: <Page1List />
    },
    {   
      number: 2,
      question: <Page2List />
    },
    {
      number: 3,
      question: <Page3List />
    },
    {
      number: 4,
      question: <Page4List />
    }
]

export default problemList;
