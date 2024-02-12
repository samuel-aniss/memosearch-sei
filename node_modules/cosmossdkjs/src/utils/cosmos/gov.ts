
import {Coin} from "../../../types/proto/cosmos/base/v1beta1/coin";
import {ProposalStatus, VoteOption, WeightedVoteOption} from "../../../types/proto/cosmos/gov/v1beta1/gov";
import {Any} from "../../../types/proto/google/protobuf/any";
import {CosmosChainClient} from "../../clients";
import {cosmos} from "../../proto";


// Supported query interfaces - types/proto/cosmos/gov/v1beta1/query.rpc.query.d.ts
// Supported tranasction interfaces - types/proto/cosmos/gov/v1beta1/tx.rpc.msg.d.ts

//---------------------------------------------
// COSMOS::GOV MODULE - QUERY HELPERS
// --------------------------------------------

export async function query_cosmos_gov_proposal(client: CosmosChainClient, proposalId: number) {
    let response = await client.query.cosmos.gov.v1beta1.proposal(
        cosmos.gov.v1beta1.QueryProposalRequest.fromPartial({
            proposalId,
        }),
    );
    return response;
}

export async function query_cosmos_gov_proposals(client: CosmosChainClient,
                                                 proposalStatus: ProposalStatus,
                                                 voter: string,
                                                 depositor: string,
                                                 offset?: number,
                                                 limit?: number,
) {
    let response = await client.query.cosmos.gov.v1beta1.proposals(
        cosmos.gov.v1beta1.QueryProposalsRequest.fromPartial({
            proposalStatus,
            voter,
            depositor,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_gov_vote(client: CosmosChainClient,
                                            proposalId: number,
                                            voter: string,
) {
    let response = await client.query.cosmos.gov.v1beta1.vote(
        cosmos.gov.v1beta1.QueryVoteRequest.fromPartial({
            proposalId,
            voter,
        }),
    );
    return response;
}

export async function query_cosmos_gov_votes(client: CosmosChainClient,
                                             proposalId: number,
                                             offset?: number,
                                             limit?: number,
) {
    let response = await client.query.cosmos.gov.v1beta1.votes(
        cosmos.gov.v1beta1.QueryVotesRequest.fromPartial({
            proposalId,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_gov_params(client: CosmosChainClient) {
    let response = await client.query.cosmos.gov.v1beta1.params(
        cosmos.gov.v1beta1.QueryParamsRequest.fromPartial({}),
    );
    return response;
}

export async function query_cosmos_gov_deposit(client: CosmosChainClient, proposalId: number, depositor: string) {
    let response = await client.query.cosmos.gov.v1beta1.deposit(
        cosmos.gov.v1beta1.QueryDepositRequest.fromPartial({
            proposalId,
            depositor,
        }),
    );
    return response;
}

export async function query_cosmos_gov_deposits(client: CosmosChainClient,
                                                proposalId: number,
                                                offset?: number,
                                                limit?: number,) {
    let response = await client.query.cosmos.gov.v1beta1.deposits(
        cosmos.gov.v1beta1.QueryDepositsRequest.fromPartial({
            proposalId,
            pagination: cosmos.base.query.v1beta1.PageRequest.fromPartial({offset: offset, limit: limit}),
        }),
    );
    return response;
}

export async function query_cosmos_gov_tally_result(client: CosmosChainClient,
                                                    proposalId: number) {
    let response = await client.query.cosmos.gov.v1beta1.tallyResult(
        cosmos.gov.v1beta1.QueryTallyResultRequest.fromPartial({
            proposalId,
        }),
    );
    return response;
}

//---------------------------------------------
// COSMOS::GOV MODULE - TRANSACTION HELPERS
// --------------------------------------------

//MsgSubmitProposal
export async function execute_cosmos_gov_submit_proposal_msg(
    content: Any,
    initialDeposit: Coin[],
    proposer: string,
) {
    let msg = cosmos.gov.v1beta1.MsgSubmitProposal.fromPartial({

        content,
        initialDeposit,
        proposer,
    });
    return msg;
}

//MsgVote
export async function execute_cosmos_gov_vote_msg(
    proposalId: number,
    voter: string,
    option: VoteOption,
) {
    let msg = cosmos.gov.v1beta1.MsgVote.fromPartial({

        proposalId,
        voter,
        option,
    });
    return msg;
}

//MsgVoteWeighted
export async function execute_cosmos_gov_vote_weighted_msg(
    proposalId: number,
    voter: string,
    options: WeightedVoteOption[],
) {
    let msg = cosmos.gov.v1beta1.MsgVoteWeighted.fromPartial({

        proposalId,
        voter,
        options,
    });
    return msg;
}

//MsgDeposit
export async function execute_cosmos_gov_deposit_msg(
    proposalId: number,
    depositor: string,
    amount: Coin[],
) {
    let msg = cosmos.gov.v1beta1.MsgDeposit.fromPartial({

        proposalId,
        depositor,
        amount,
    });
    return msg;
}
