import { logger } from "../controllers/util/Logging"
import _ from "lodash"
import { attackSkill, genders, loot, measurements, species } from "@js/data"

export class Character {
    _dnaPoints = 0
    _isPlayer = false
    _parts = { head: {}, torso: {}, leg: {}, arm: {}, tail: {} }

    constructor(data, load) {
        _.each(data, (val, key) => {
            this[`${key}`] = val
        })

        if (load)
            return

        // Stats
        // Size
        // Strength
        // Defense
        // Allure

        // Parts Listing
        // Head
        // Torso
        // Leg
        // Arms
        // Tail

        this.setParts()
        this.calcStats()
        this.healthReset() // Does everything for health setting
        this.lustReset() // Does everything for lust setting
    }

    get dnaPoints() { return this._dnaPoints }
    set dnaPoints(dnaPoints) { this._dnaPoints = dnaPoints }

    get isPlayer() { return this._isPlayer }
    set isPlayer(isPlayer) { this._isPlayer = isPlayer }

    get name() { return this._name }
    set name(name) { this._name = name }

    get stats() { return this._stats }
    set stats(stats) { this._stats = stats }

    get parts() { return this._parts }
    set parts(parts) { this._parts = parts }

    calcMaxHealth() {
        let hB = Math.ceil(this.stats.size + this.stats.defense)
        this.stats.maxHealth = hB
    }

    calcMaxLust() {
        let mL = Math.ceil(this.stats.size + this.stats.allure)
        this.stats.maxLust = mL
    }

    calcStats() {
        if (this._stats)
            return

        if (this.defaultStat) {
            this.stats = { size: this.defaultStat, strength: this.defaultStat, defense: this.defaultStat, allure: this.defaultStat }
            delete this.defaultStat
            return
        }

        // TODO Do Random Stats Given Max Level and baseStat
    }

    setParts() {
        // TODO Once combat is working this needs to be in place
    }

    isAlive() {
        return this.stats.health > 0
    }

    healthReset() {
        this.calcMaxHealth()
        this.stats.health = this.stats.maxHealth
    }

    lustReset() {
        this.calcMaxLust()
        this.stats.lust = this.stats.maxLust
    }
}