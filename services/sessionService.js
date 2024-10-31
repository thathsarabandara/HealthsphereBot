// services/sessionService.js
const sessions = {};

function manageSession(socketId) {
    if (!sessions[socketId]) {
        sessions[socketId] = { id: socketId, timestamp: Date.now() };
    }
    return sessions[socketId];
}

module.exports = { manageSession };
