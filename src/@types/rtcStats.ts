import { TimelineEvent, TimelineTag } from '@peermetrics/webrtc-stats';
export interface MonitoringConstructorOptions {
  backendUrl: string;
}

export type EventTypes =
  | 'timeline'
  | 'stats'
  | 'getUserMedia'
  | 'peer'
  | 'track'
  | 'connection'
  | 'datachannel';
export interface Report extends TimelineEvent {
  // type: EventTypes;
  // conferenceId?: string;
  event: string;
  peerId: string;
  tag: TimelineTag;
  data: StatsObjectCustom;
  timestamp: any;
}

export type trackKinds = 'audio' | 'video';
export type audioMimeTypes = 'audio/opus';

export interface TrackReportExtended {
  audioLevel?: number;
  bitrate?: number;
  bytesReceived?: number;
  clockRate?: number;
  codecId?: string;
  concealedSamples?: number;
  concealmentEvents?: number;
  fecPacketsDiscarded?: number;
  fecPacketsReceived?: number;
  headerBytesReceived?: number;
  id?: string;
  insertedSamplesForDeceleration?: number;
  jitter?: number;
  jitterBufferDelay?: number;
  jitterBufferEmittedCount?: number;
  kind?: trackKinds;
  lastPacketReceivedTimestamp?: number;
  mediaType?: trackKinds;
  mediaSourceId?: string;
  mimeType?: audioMimeTypes;
  packetRate?: number;
  packetsDiscarded?: number;
  packetsLost?: number;
  packetsReceived?: number;
  payloadType?: number;
  remoteId?: string;
  removedSamplesForAcceleration?: number;
  silentConcealedSamples?: number;
  ssrc?: number;
  timestamp?: number;
  totalAudioEnergy?: number;
  totalSamplesDuration?: number;
  totalSamplesReceived?: number;
  trackId?: string;
  transportId?: string;
  type?: RTCStatsType;
}

export interface ConnectionReport {
  availableOutgoingBitrate: number;
  bytesDiscardedOnSend: number;
  bytesReceived: number;
  bytesSent: number;
  consentRequestsSent: number;
  currentRoundTripTime: number;
  dataChannelsClosed: number;
  dataChannelsOpened: number;
  id: 'RTCIceCandidatePair_gFnwugUt_czKu+ubr';
  local: any; //FIXME
  localCandidateId: 'RTCIceCandidate_gFnwugUt';
  nominated: true;
  packetsDiscardedOnSend: number;
  packetsReceived: number;
  packetsSent: number;
  priority: number;
  remote: any; //FIXME
  remoteCandidateId: 'RTCIceCandidate_czKu+ubr';
  requestsReceived: number;
  requestsSent: number;
  responsesReceived: number;
  responsesSent: number;
  state: 'succeeded';
  timestamp: number;
  totalRoundTripTime: number;
  transportId: 'RTCTransport_0_1';
  type: 'candidate-pair';
  writable: true;
}
export interface BrowserInfo {
  userAgent: string;
  platform: string;
}

export interface StatsObjectCustom {
  inbound: TrackReportExtended[];
  outbound: TrackReportExtended[];
  connection: ConnectionReport;
}

export interface Peer extends StatsObjectCustom {
  peerId: string;
}

export interface CandidateType {
  type: 'local' | 'remote';
  candidateType: 'host' | 'srflx' | 'prflx' | 'relay';
  ip: string;
  port: number;
  protocol: 'tcp' | 'udp';
}
