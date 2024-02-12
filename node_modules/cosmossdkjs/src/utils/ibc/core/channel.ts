import {Any} from "../../../../types/proto/google/protobuf/any";
import {Channel, Packet} from "../../../../types/proto/ibc/core/channel/v1/channel";
import {Height} from "../../../../types/proto/ibc/core/client/v1/client";
import {CosmosChainClient} from "../../../clients";
import {cosmos, ibc} from "../../../proto";



// Supported query interfaces - types/proto/ibc/core/channel/v1/query.rpc.query.d.ts

//---------------------------------------------
// IBC::CHANNEL MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_ibc_core_channel_channel(client: CosmosChainClient, portId: string, channelId: string) {
    let response = await client.query.ibc.core.channel.v1.channel(
        ibc.core.channel.v1.QueryChannelRequest.fromPartial({
            portId,
            channelId,
        }),
    );
    return response;
}

export async function query_ibc_core_channel_channels(client: CosmosChainClient, offset?: number,
                                                      limit?: number) {
    let response = await client.query.ibc.core.channel.v1.channels(
        ibc.core.channel.v1.QueryChannelsRequest.fromPartial({
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_core_channel_connectionChannels(client: CosmosChainClient, connection: string, offset?: number,
                                                                limit?: number) {
    let response = await client.query.ibc.core.channel.v1.connectionChannels(
        ibc.core.channel.v1.QueryConnectionChannelsRequest.fromPartial({
            connection,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_core_channel_channelClientState(client: CosmosChainClient, portId: string, channelId: string) {
    let response = await client.query.ibc.core.channel.v1.channelClientState(
        ibc.core.channel.v1.QueryChannelClientStateRequest.fromPartial({
            portId,
            channelId,
        }),
    );
    return response;
}

export async function query_ibc_core_channel_channelConsensusState(client: CosmosChainClient, portId: string, channelId: string, revisionNumber: Long, revisionHeight: Long) {
    let response = await client.query.ibc.core.channel.v1.channelConsensusState(
        ibc.core.channel.v1.QueryChannelConsensusStateRequest.fromPartial({
            portId,
            channelId,
            revisionNumber,
            revisionHeight
        }),
    );
    return response;
}

export async function query_ibc_core_channel_packetCommitment(client: CosmosChainClient, portId: string, channelId: string, sequence: Long) {
    let response = await client.query.ibc.core.channel.v1.packetCommitment(
        ibc.core.channel.v1.QueryPacketCommitmentRequest.fromPartial({
            portId,
            channelId,
            sequence
        }),
    );
    return response;
}

export async function query_ibc_core_channel_packetCommitments(client: CosmosChainClient, portId: string, channelId: string, offset?: number,
                                                               limit?: number) {
    let response = await client.query.ibc.core.channel.v1.packetCommitments(
        ibc.core.channel.v1.QueryPacketCommitmentsRequest.fromPartial({
            portId,
            channelId,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_core_channel_packetReceipt(client: CosmosChainClient, portId: string, channelId: string, sequence: Long) {
    let response = await client.query.ibc.core.channel.v1.packetReceipt(
        ibc.core.channel.v1.QueryPacketReceiptRequest.fromPartial({
            portId,
            channelId,
            sequence,
        }),
    );
    return response;
}

export async function query_ibc_core_channel_packetAcknowledgement(client: CosmosChainClient, portId: string, channelId: string, sequence: Long) {
    let response = await client.query.ibc.core.channel.v1.packetAcknowledgement(
        ibc.core.channel.v1.QueryPacketAcknowledgementRequest.fromPartial({
            portId,
            channelId,
            sequence,
        }),
    );
    return response;
}

export async function query_ibc_core_channel_packetAcknowledgements(client: CosmosChainClient, portId: string, channelId: string, packetCommitmentSequences: Long[], offset?: number,
                                                                    limit?: number) {
    let response = await client.query.ibc.core.channel.v1.packetAcknowledgements(
        ibc.core.channel.v1.QueryPacketAcknowledgementsRequest.fromPartial({
            portId,
            channelId,

            packetCommitmentSequences,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_ibc_core_channel_unreceivedPackets(client: CosmosChainClient, portId: string, channelId: string, packetCommitmentSequences: Long[]) {
    let response = await client.query.ibc.core.channel.v1.unreceivedPackets(
        ibc.core.channel.v1.QueryUnreceivedPacketsRequest.fromPartial({
            portId,
            channelId,
            packetCommitmentSequences,
        }),
    );
    return response;
}

export async function query_ibc_core_channel_unreceivedAcks(client: CosmosChainClient, portId: string, channelId: string, packetAckSequences: Long[]) {
    let response = await client.query.ibc.core.channel.v1.unreceivedAcks(
        ibc.core.channel.v1.QueryUnreceivedAcksRequest.fromPartial({
            portId,
            channelId,
            packetAckSequences,
        }),
    );
    return response;
}

export async function query_ibc_core_channel_nextSequenceReceive(client: CosmosChainClient, portId: string, channelId: string) {
    let response = await client.query.ibc.core.channel.v1.nextSequenceReceive(
        ibc.core.channel.v1.QueryNextSequenceReceiveRequest.fromPartial({
            portId,
            channelId,

        }),
    );
    return response;
}

// Supported transaction interfaces - types/proto/ibc/core/channel/v1/tx.rpc.msg.d.ts

//---------------------------------------------
// IBC::CHANNEL MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgChannelOpenInit
export async function execute_ibc_core_channel_channelOpenInit(
    portId: string,
    channel: Channel,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgChannelOpenInit.fromPartial({
        portId,
        channel,
        signer
    });
    return msg;
}

//MsgChannelOpenTry
export async function execute_ibc_core_channel_channelOpenTry(
    portId: string,
    previousChannelId: string,
    channel: Channel,
    counterpartyVersion: string,
    proofInit: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgChannelOpenTry.fromPartial({
        portId,
        previousChannelId,
        channel,
        counterpartyVersion,
        proofInit,
        proofHeight,
        signer
    });
    return msg;
}

//MsgChannelOpenAck
export async function execute_ibc_core_channel_channelOpenAck(
    portId: string,
    channelId: string,
    counterpartyChannelId: string,
    counterpartyVersion: string,
    proofTry: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgChannelOpenAck.fromPartial({
        portId,
        counterpartyChannelId,
        channelId,
        counterpartyVersion,
        proofTry,
        proofHeight,
        signer
    });
    return msg;
}

//MsgChannelOpenConfirm
export async function execute_ibc_core_channel_channelOpenConfirm(
    portId: string,
    channelId: string,
    proofAck: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgChannelOpenConfirm.fromPartial({
        portId,
        channelId,
        proofAck,
        proofHeight,
        signer
    });
    return msg;
}

//MsgChannelCloseInit
export async function execute_ibc_core_channel_channelCloseInit(
    portId: string,
    channelId: string,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgChannelCloseInit.fromPartial({
        portId,
        channelId,
        signer
    });
    return msg;
}

//MsgChannelCloseConfirm
export async function execute_ibc_core_channel_channelCloseConfirm(
    portId: string,
    channelId: string,
    proofInit: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgChannelCloseConfirm.fromPartial({
        portId,
        channelId,
        signer,
        proofInit,
        proofHeight,

    });
    return msg;
}

//MsgRecvPacket
export async function execute_ibc_core_channel_recvPacket(
    packet: Packet,
    proofCommitment: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgRecvPacket.fromPartial({
        packet,
        proofCommitment,
        proofHeight,
        signer,

    });
    return msg;
}

//MsgTimeout
export async function execute_ibc_core_channel_timeout(
    packet: Packet,
    proofUnreceived: Uint8Array,
    proofHeight: Height,
    nextSequenceRecv: Long,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgTimeout.fromPartial({
        packet,
        proofUnreceived,
        proofHeight,
        nextSequenceRecv,
        signer,

    });
    return msg;
}

//MsgTimeoutOnClose
export async function execute_ibc_core_channel_timeoutOnClose(
    packet: Packet,
    proofUnreceived: Uint8Array,
    proofClose: Uint8Array,
    proofHeight: Height,
    nextSequenceRecv: Long,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgTimeoutOnClose.fromPartial({
        packet,
        proofUnreceived,
        proofHeight,
        nextSequenceRecv,
        signer,

    });
    return msg;
}

//MsgAcknowledgement
export async function execute_ibc_core_channel_acknowledgement(
    packet: Packet,
    acknowledgement: Uint8Array,
    proofAcked: Uint8Array,
    proofHeight: Height,
    signer: string,
) {
    let msg = ibc.core.channel.v1.MsgAcknowledgement.fromPartial({
        packet,
        acknowledgement,
        proofHeight,
        proofAcked,
        signer,

    });
    return msg;
}