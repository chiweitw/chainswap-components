import React from 'react'
import { Box } from '@material-ui/core'
import Modal from '../Modal/Modal'
import Button from '../Button/Button'
import Currency from '../../models/currency'
import Chain from '../../models/chain'
import SwapChain from './SwapChain'
import { Text } from 'rebass'
import ChainAddress from './ChainAddress'

interface Props {
  children?: React.ReactNode
  label?: string
  from: Chain
  to: Chain
  walletLogo: string
  address: string
  value: string
  selectedCurrency: Currency
  onConfirm: () => void
}

export default function ConfirmDepositModal(props: Props) {
  const { value, selectedCurrency, from, to, walletLogo, address, onConfirm } = props

  return (
    <>
      <Modal title="Confirm Deposit" closeIcon>
        <Box paddingTop={'20px'}>
          <Text fontWeight={'500'} fontSize={'28px'} textAlign={'center'}>
            {value} {selectedCurrency.symbol}
          </Text>
        </Box>
        <SwapChain from={from} to={to} />
        <ChainAddress walletLogo={walletLogo} address={address} />
        <Box margin="32px 32px 28px">
          <Button onClick={onConfirm}>Confirm</Button>
        </Box>
      </Modal>
    </>
  )
}
