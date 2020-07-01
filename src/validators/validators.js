export function isEmptyConstructor(error) {
	return value => value ? undefined : error
}