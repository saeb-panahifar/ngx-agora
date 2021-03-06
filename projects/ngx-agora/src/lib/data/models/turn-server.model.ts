/**
 * TURN server settings.
 *
 * Enterprise users with a company firewall can use this property to pass audio and video data to the Agora SD-RTN through the TURN Server.
 */
export interface TurnServer {
  /**
   * Sets whether to force data transfer by TURN Server:
   * - true: Force data transfer.
   * - false: (default) Not to force data transfer.
   */
  forceTurn?: boolean;
  /**
   * Your TURN Server password. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
   */
  password: string;
  /**
   * The TCP port(s) you want add to TURN Server.
   * Numeric characters only, and the string length must be greater than 0 and less than 256 bytes.
   */
  tcpport?: string;
  /**
   * Your TURN Server URL address. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
   */
  turnServerURL: string;
  /**
   * The UDP port(s) you want to add to TURN Server.
   * Numeric characters only, and the string length must be greater than 0 and less than 256 bytes.
   */
  udpport: string;
  /**
   * Your TURN Server username. ASCII characters only, and the string length must be greater than 0 and less than 256 bytes.
   */
  username: string;
}
