import React from 'react'
import PropTypes from 'prop-types'
import { FaCircle } from 'react-icons/lib/fa'
import { btc, blockExplorer } from 'utils'
import styles from './Contact.scss'

const PendingContact = ({ channel }) => (
  <li className={styles.friend} key={channel.chan_id}>
    <section className={styles.info}>
      <p className={styles.pending}>
        <FaCircle style={{ verticalAlign: 'top' }} />
        <span>
          Pending
          <i onClick={() => blockExplorer.showChannelPoint(channel)}>
            (Details)
          </i>
        </span>
      </p>
      <h2>{channel.channel.remote_node_pub}</h2>
    </section>
    <section className={styles.limits}>
      <div>
        <h4>Can Pay</h4>
        <p>{btc.satoshisToBtc(channel.channel.local_balance)}BTC</p>
      </div>
      <div>
        <h4>Can Receive</h4>
        <p>{btc.satoshisToBtc(channel.channel.remote_balance)}BTC</p>
      </div>
    </section>
  </li>
)

PendingContact.propTypes = {
  channel: PropTypes.object.isRequired
}

export default PendingContact
