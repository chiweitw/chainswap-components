import DummyLogo from '../assets/images/bsc.svg'
import Transaction from '../models/transaction'
import Notification from '../models/notification'

export const ETH = {
  logo: DummyLogo,
  symbol: 'ETH',
  name: 'ETH',
  balance: 0,
}

export const BSC = {
  logo: DummyLogo,
  symbol: 'BSC',
}

export const MATTER = {
  logo: DummyLogo,
  symbol: 'MATTER',
  name: 'MATTER',
  balance: 0,
}

export const claimModalData = [
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'ready',
  },
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'ready',
  },
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'success',
  },
  {
    from: ETH,
    to: BSC,
    currency: MATTER,
    address: '0x72ef...7123',
    amount: 10500,
    status: 'failure',
  },
]

export const CurrencyList = [
  {
    logo: DummyLogo,
    symbol: 'TOKEN',
    name: 'ChainSwap.com Governance Token',
    balance: 800,
  },
  {
    logo: DummyLogo,
    symbol: 'MATTER',
    name: 'Antimatter.Finance Governance Token',
    balance: 400,
  },
]

export const ChainList = [
  {
    logo: DummyLogo,
    symbol: 'ETH',
  },
  {
    logo: DummyLogo,
    symbol: 'BSC',
  },
  {
    logo: DummyLogo,
    symbol: 'OEC',
  },
  {
    logo: DummyLogo,
    symbol: 'HECO',
  },
  {
    logo: DummyLogo,
    symbol: 'Polygon',
  },
]

export const ConfirmedTransactionList: Transaction[] = [
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
]

export const PendingTransactionList: Transaction[] = [
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'pending',
  },
  {
    summary: 'Swap 1.0ETH for 0.000000001 BSC',
    status: 'pending',
  },
]

export const NotificationList: Notification[] = [
  {
    summary: 'Deposit 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
  {
    summary: 'Withdraw 1.0ETH for 0.000000001 BSC',
    status: 'success',
  },
]
