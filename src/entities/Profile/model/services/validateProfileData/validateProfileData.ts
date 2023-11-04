import { type Profile } from 'entities/Profile'
import { ValidateProfileError } from 'entities/Profile/model/types/profile'

export const validateProfileData = (profile?: Profile) => {
    const errors: ValidateProfileError[] = []

    if (profile == null) {
        errors?.push(ValidateProfileError.NO_DATA)

        return errors
    }

    const {
        firstname,
        lastname,
        age,
        city,
        username
    } = profile

    if ([firstname, firstname].map(v => Boolean(v)).includes(false)) {
        errors.push(ValidateProfileError.INCORRECT_USER_DATA)
    }

    if (Boolean(age) && !Number.isInteger(age)) {
        errors?.push(ValidateProfileError.INCORRECT_AGE)
    }

    if (city == null || city === '') {
        errors?.push(ValidateProfileError.INCORRECT_CITY)
    }

    if (username == null || username === '') {
        errors?.push(ValidateProfileError.INCORRECT_USERNAME)
    }

    console.log([firstname, lastname, username, city].map(v => Boolean(v)))

    return errors
}
