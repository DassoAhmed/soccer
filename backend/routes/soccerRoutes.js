import { 
    addNewPlayer,
    getPlayers,
    getPlayerWithId,
    updatePlayer
} from '../controllers/playerControllers'

    const routes = (app) => {
        app.route('/players')
        .get(getPlayers) // Get endpoint
        .post(addNewPlayer) // POST endpoint

        app.route('/player/:PlayerId')
        .get(getPlayerWithId) //Get specific player
        .put(updatePlayer) // update a specific player
    }

     export default routes 
