import { species, measurements, genders } from '@js/data'
import { getPronounId } from '@controller/character/PronounController'
import { Character } from '@js/objects/Character'
import { logger } from '@util/Logging'

Macro.add('startGameRoutine', {
    skipArgs: true,
    handler: function () {
        logger('WHAT IS UP MY FELLOW CONSOLE LOGS')

        variables().player = new Character({
            defaultStat: 5,
            name: variables().player.name,
            isPlayer: true
        })
    }
})