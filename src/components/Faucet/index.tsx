import styled from '@emotion/styled'
import { observer } from 'mobx-react-lite'
import React from 'react'

import { YearList } from '../YearList'
import { WinnerList } from '../WinnerList'

const CardForm = styled.div`
  width: 48rem;
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  background-color: #191332;
  margin-top: 100px;
  border-radius: 10px;
`
const CardTitle = styled.h5`
  text-align: center;
  padding: 5px;
  padding-top: 15px;
`

const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px;
  margin-top: 0;
  padding: 15px;
  padding-top: 0px;
  border: 1px solid #29294d;
  border-radius: 5px;
`

export const Faucet = observer(() => {
  //use MobX to manage store

  return (
    <CardForm>
      <CardTitle>F1 Series Champions</CardTitle>
      <CardBody>
        <YearList />
        <WinnerList />
      </CardBody>
    </CardForm>
  )
})
