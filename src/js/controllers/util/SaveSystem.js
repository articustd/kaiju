import { migrate } from "@js/migrations"
import { Character } from "@js/objects/Character"
import _ from "lodash"
import { logger } from "./Logging"

export function saveGameData(saveData = {}) {
    return saveData
}

export function loadGameData(save, version) {
    // migrate(save, version)

    hydrateClasses(_.last(save.state.history).variables)
}

function hydrateClasses(variables) {
    State.variables.player = new Character(variables.player, true)
    if (variables.enemy)
        State.variables.enemy = new Character(variables.enemy, true)
}