# Pet System Balance Data

Source files:

- `C:\GitHub\aws-moomin-game-server\src\constants\metaCollections\petConfiguration.ts`
- `C:\GitHub\aws-moomin-game-server\src\constants\metaCollections\activePets.ts`
- `C:\GitHub\aws-moomin-game-server\src\core\original\modules\petManagerBase.ts`
- `C:\GitHub\aws-moomin-game-server\src\core\original\modules\petManager.ts`

## Key Reading

- The level curve has 60 levels.
- `Pet Food to Next` is the normal food cost for moving from that level to the next level.
- `evolve gate` means the config has `-1` instead of a food cost. In practice this was an evolution step rather than a normal food level-up.
- The total normal Pet Food required from level 1 to level 60 is `1,299,635`, excluding evolution requirements and timer skips.
- The same base stat curve is used for all four pet skills. Each pet archetype then applies its own multiplier.

## Pet Food Curve by Tier

| Level Range | Normal Pet Food Cost | Notes |
|---|---:|---|
| 1-10 | 2,462 | First growth tier before first evolution gate |
| 11-20 | 5,373 | Second tier before evolution gate |
| 21-30 | 39,600 | First major economy jump |
| 31-40 | 108,000 | Mid-game investment tier |
| 41-50 | 407,200 | Heavy long-term sink |
| 51-60 | 737,000 | Endgame sink and long-tail progression |

## Level Table

| Level | Pet Food to Next | Total Food Spent | Base Stat | Item Bag | Ticket Bag | Coin Bag |
|---:|---:|---:|---:|---:|---:|---:|
| 1 | 54 | 0 | 100 | 5 | 6 | 288 |
| 2 | 165 | 54 | 102 | 5 | 6 | 294 |
| 3 | 165 | 219 | 104 | 5 | 6 | 300 |
| 4 | 213 | 384 | 106 | 5 | 6 | 305 |
| 5 | 267 | 597 | 108 | 5 | 6 | 311 |
| 6 | 319 | 864 | 110 | 5 | 6 | 317 |
| 7 | 373 | 1,183 | 113 | 5 | 7 | 325 |
| 8 | 426 | 1,556 | 115 | 5 | 7 | 331 |
| 9 | 480 | 1,982 | 117 | 5 | 7 | 337 |
| 10 | evolve gate | 2,462 | 120 | 5 | 7 | 346 |
| 11 | 480 | 2,462 | 155 | 7 | 9 | 446 |
| 12 | 480 | 2,942 | 158 | 7 | 9 | 455 |
| 13 | 542 | 3,422 | 162 | 7 | 9 | 467 |
| 14 | 542 | 3,964 | 165 | 7 | 10 | 475 |
| 15 | 582 | 4,506 | 168 | 7 | 10 | 484 |
| 16 | 624 | 5,088 | 172 | 7 | 10 | 495 |
| 17 | 666 | 5,712 | 175 | 7 | 10 | 504 |
| 18 | 708 | 6,378 | 178 | 7 | 10 | 513 |
| 19 | 749 | 7,086 | 182 | 7 | 10 | 524 |
| 20 | evolve gate | 7,835 | 186 | 7 | 11 | 536 |
| 21 | 3,800 | 7,835 | 241 | 7 | 14 | 694 |
| 22 | 3,800 | 11,635 | 246 | 10 | 14 | 708 |
| 23 | 4,000 | 15,435 | 251 | 10 | 14 | 723 |
| 24 | 4,200 | 19,435 | 256 | 10 | 15 | 737 |
| 25 | 4,400 | 23,635 | 261 | 10 | 15 | 752 |
| 26 | 4,600 | 28,035 | 266 | 10 | 15 | 766 |
| 27 | 4,800 | 32,635 | 272 | 10 | 16 | 783 |
| 28 | 4,900 | 37,435 | 277 | 10 | 16 | 798 |
| 29 | 5,100 | 42,335 | 283 | 10 | 16 | 815 |
| 30 | evolve gate | 47,435 | 288 | 10 | 17 | 829 |
| 31 | 10,500 | 47,435 | 375 | 15 | 22 | 1,080 |
| 32 | 10,500 | 57,935 | 383 | 15 | 22 | 1,103 |
| 33 | 10,900 | 68,435 | 390 | 15 | 22 | 1,123 |
| 34 | 11,500 | 79,335 | 398 | 15 | 23 | 1,146 |
| 35 | 11,900 | 90,835 | 406 | 15 | 23 | 1,169 |
| 36 | 12,500 | 102,735 | 414 | 15 | 24 | 1,192 |
| 37 | 12,900 | 115,235 | 422 | 15 | 24 | 1,215 |
| 38 | 13,400 | 128,135 | 431 | 15 | 25 | 1,241 |
| 39 | 13,900 | 141,535 | 439 | 15 | 25 | 1,264 |
| 40 | evolve gate | 155,435 | 448 | 15 | 26 | 1,290 |
| 41 | 14,500 | 155,435 | 583 | 20 | 34 | 1,679 |
| 42 | 44,000 | 169,935 | 594 | 20 | 34 | 1,711 |
| 43 | 45,000 | 213,935 | 606 | 20 | 35 | 1,745 |
| 44 | 47,000 | 258,935 | 618 | 20 | 36 | 1,780 |
| 45 | 48,000 | 305,935 | 631 | 20 | 36 | 1,817 |
| 46 | 50,000 | 353,935 | 643 | 20 | 37 | 1,852 |
| 47 | 51,500 | 403,935 | 656 | 20 | 38 | 1,889 |
| 48 | 52,900 | 455,435 | 669 | 20 | 39 | 1,927 |
| 49 | 54,300 | 508,335 | 683 | 20 | 39 | 1,967 |
| 50 | evolve gate | 562,635 | 696 | 20 | 40 | 2,004 |
| 51 | 74,000 | 562,635 | 905 | 25 | 52 | 2,606 |
| 52 | 75,000 | 636,635 | 923 | 25 | 53 | 2,658 |
| 53 | 77,000 | 711,635 | 942 | 25 | 54 | 2,713 |
| 54 | 78,000 | 788,635 | 961 | 25 | 55 | 2,768 |
| 55 | 80,000 | 866,635 | 980 | 25 | 56 | 2,822 |
| 56 | 81,500 | 946,635 | 999 | 25 | 58 | 2,877 |
| 57 | 82,900 | 1,028,135 | 1,019 | 25 | 59 | 2,935 |
| 58 | 94,300 | 1,111,035 | 1,040 | 25 | 60 | 2,995 |
| 59 | 94,300 | 1,205,335 | 1,061 | 25 | 61 | 3,056 |
| 60 | max | 1,299,635 | 1,082 | 25 | 62 | 3,116 |

## Skill Calculation

The system calculates a base stat from the pet level, then multiplies it by the pet archetype and any evolution bonus.

```text
skill_stat = pet_multiplier * base_stat_for_level * (1 + evolution_bonus / 10)
```

The four player-facing skills map like this:

| Portfolio Name | Code Name | Action Mode | What It Affects |
|---|---|---|---|
| Strength | `strength_multiplier` | `treasure` | Treasure collection and Super Mode pet attraction |
| Agility | `speed_multiplier` | `ingredient_cooking` | Ingredient collection and enhanced food collection |
| Luck | `luck_multiplier` | `coin` | Gold collection |
| Walk | `dexterity_multiplier` | `tickets` | Ticket collection |

Evolution bonuses are stored per skill as random bonus counters. Each counter adds `+10%` to that skill. The evolution roll gives a `12.5%` chance to add one bonus to each of the four skills, and a `50%` chance of no random bonus.

## Pet Archetype Multipliers

| Pet | Agility | Luck | Walk | Strength |
|---|---:|---:|---:|---:|
| bat | 1.2 | 0.8 | 0.6 | 0.4 |
| cat | 0.6 | 0.8 | 0.2 | 0.4 |
| owl | 1.0 | 0.6 | 0.8 | 1.6 |
| squirrel | 1.2 | 0.4 | 0.8 | 0.6 |
| parrot | 1.2 | 1.6 | 0.6 | 0.6 |
| crawly | 0.8 | 1.2 | 1.8 | 1.2 |
| dragon | 0.8 | 1.2 | 0.6 | 0.4 |
| mouse | 0.8 | 0.4 | 0.6 | 0.2 |
| creep | 1.2 | 1.2 | 0.8 | 1.8 |
| frog | 0.6 | 1.2 | 1.6 | 0.6 |
| hedgehog | 0.2 | 0.8 | 0.4 | 0.6 |
| sakuradragon | 1.2 | 1.8 | 0.8 | 1.2 |
| airdragon | 0.8 | 1.4 | 1.6 | 1.2 |
| dog | 1.0 | 0.8 | 1.6 | 0.6 |
| rabbit | 1.6 | 1.0 | 0.8 | 1.0 |
| fluffycat | 0.8 | 1.6 | 0.8 | 2.0 |
| Hattifattener | 0.8 | 1.6 | 0.8 | 2.0 |

## Example: Parrot at Level 60

Using base stat `1,082` and no evolution bonus:

| Skill | Calculation | Result |
|---|---|---:|
| Agility | `1.2 * 1,082` | 1,298.4 |
| Luck | `1.6 * 1,082` | 1,731.2 |
| Walk | `0.6 * 1,082` | 649.2 |
| Strength | `0.6 * 1,082` | 649.2 |

## Action Timing and Caps

```text
one_action = 600 seconds = 10 minutes
action_count = floor(effective_active_time / 600)
max_stored_actions = 144
```

So one pet could accumulate up to `144` ten-minute actions, equal to `24 hours`, before the stored action count capped.

Mood modifies effective action time:

| Mood Band | Multiplier |
|---|---:|
| Low mood | 0.6x |
| Neutral | 1.0x |
| Happy | 1.2x |
| Thrilled | 1.5x |

## Actual Effect Formulas

### Gold

```text
gold_per_action = (2 * coin_skill) / 100
```

Gold waits in the pet action result and is capped by the level-specific `Coin Bag`.

### Tickets

```text
tickets_per_action = (0.04 * ticket_skill) / 100
```

Tickets wait in the pet action result and are capped by the level-specific `Ticket Bag`.

### Treasure and Ingredients

The rarity table is:

| Rarity | Factor | Chance at 100 Stat |
|---:|---:|---:|
| 1 | 0.05 | 5.0% |
| 2 | 0.035 | 3.5% |
| 3 | 0.02 | 2.0% |
| 4 | 0.01 | 1.0% |
| 5 | 0.0025 | 0.25% |

```text
treasure_collection_chance = (strength_skill * rarity_factor) / 100
ingredient_collection_chance = (agility_skill * rarity_factor) / 100
```

Collected items are capped by the level-specific `Item Bag`.

### Super Mode Enhanced Food

Super Mode adds `+0.015` to the rarity factor before skill scaling.

```text
enhanced_food_chance = (agility_skill * (rarity_factor + 0.015)) / 100
```

### Super Mode Pet Attraction

Super Mode can also attract another pet of the same species. The chance uses the pet's star rarity and the Strength skill.

```text
pet_attraction_chance = (strength_skill * rarity_factor_for_pet_stars) / 100
```

## Wild Pet Catch Chance

The wild pet catching system is separate from the AFK action formula. Its base chance depends on pet type, then friend power, item boosts, and special modifiers can raise it toward the pet-specific maximum increase.

```text
catch_chance =
  base_pet_chance
  + max_increase * min(1, friend_power / max_power + item_boost / max_increase)
  + special_modifiers
```

The portfolio-safe explanation:

> Catching was not just a flat roll. Each pet had its own base catch chance, and players could improve the result through related progression, equipment, and temporary boosts.
