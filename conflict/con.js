 function(candidate, opt_markRead) {
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
        candidate['insert-master']
    ];
};
