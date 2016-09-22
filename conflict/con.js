/**
 * Transform the candidate object into as small a format as possible for caching (to preserve memory).
 * Normalize field names for the different possible candidate object formats that can be passed
 * @param {Object} candidate
 * @param {boolean=} opt_markRead If this is true, the candidate in the cache will be assumed to be read
 * @return {Object} The compressed version of the candidate
 * @private
 */
indeed.dradis.controllers.CandidateDetailsController.prototype.normalizeCandidateListCandidate_ = function(candidate, opt_markRead) {
    var isRead;
    if (opt_markRead) {
        isRead = true;
    } else if (candidate.hasOwnProperty('read')) {
        isRead = candidate['read'];
    } else {
        isRead = !candidate['unread'];
    }
    return [
        candidate['encryptedCandidateId'] || candidate['candidateId'],//0
        candidate['name'],//1
        isRead,//2
        candidate['lastJobTitle'],//3
        candidate['location'],//4
        candidate['dateCreated'],//5
        candidate['status'] || candidate['currentStatus'],//6
        candidate['recommended'],//7
        candidate['starred'],//8
        candidate['remote nb']
    ];
};
