import * as _115 from "./abci/types";
import * as _116 from "./crypto/keys";
import * as _117 from "./crypto/proof";
import * as _118 from "./libs/bits/types";
import * as _119 from "./p2p/types";
import * as _120 from "./types/block";
import * as _121 from "./types/evidence";
import * as _122 from "./types/params";
import * as _123 from "./types/types";
import * as _124 from "./types/validator";
import * as _125 from "./version/types";
export var tendermint;
(function (tendermint) {
    tendermint.abci = {
        ..._115
    };
    tendermint.crypto = {
        ..._116,
        ..._117
    };
    let libs;
    (function (libs) {
        libs.bits = {
            ..._118
        };
    })(libs = tendermint.libs || (tendermint.libs = {}));
    tendermint.p2p = {
        ..._119
    };
    tendermint.types = {
        ..._120,
        ..._121,
        ..._122,
        ..._123,
        ..._124
    };
    tendermint.version = {
        ..._125
    };
})(tendermint || (tendermint = {}));
