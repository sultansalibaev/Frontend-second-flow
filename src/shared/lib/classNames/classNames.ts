export type Mods = Record<string, boolean | string>

export function classNames (mods: Mods, additional?: string[]): string {
    return [
        ...(additional ?? []).filter(Boolean),
        ...Object.keys(mods)
            .filter(className => Boolean(mods[className]))
    ].join(' ')
}
