import { logger } from "../controllers/util/Logging"
import _ from "lodash"
import { attackSkill, genders, loot, measurements, species } from "@js/data"

export class Character {
    constructor(data, load) {
        if (load) {
            this.load(load)
            return
        }

        logger(this)
        _.each(data, (val, key) => {
            this[`_${key}`] = val
        })
        logger(this)

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
        this.calcMaxHealth()
        this.stats.health = this.stats.maxHealth

        // this.calcGenitals()
        if(!this._dnaPoints)
            this._dnaPoints = 0
    }

    get dnaPoints() { return this._dnaPoints }
    set dnaPoints(dnaPoints) { this._dnaPoints = dnaPoints }

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

    calcStats() {
        if (this._stats)
            return

        if (this._defaultStat) {
            this.stats = { size: this._baseStat, strength: this._baseStat, defense: this._baseStat, allure: this._baseStat }
            delete this._defaultStat
            return
        }

        // TODO Do Random Stats Given Max Level and baseStat
    }

    setParts() {
        // TODO Once combat is working this needs to be in place
        if (this._parts)
            return

        this._parts = {head: {}, torso: {}, leg: {}, arm: {}, tail: {}}
    }
    
    isAlive() {
        return this.stats.health > 0
    }
    
    rest() {
        this.calcMaxHealth()
        this.stats.health = this.stats.maxHealth
    }
    
        load(data) {
            _.each(data, (val, key) => {
                logger({ key, val })
                this[key] = val
            })
        }
}