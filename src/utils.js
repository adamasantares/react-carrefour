

export function childName(child)
{
    if (typeof(child.type) === 'function' && child.type.name) {
        return child.type.name;
    }
    if (typeof(child.type) === 'string') {
        return child.type;
    }
    if (child['$$typeof'] && typeof(child['$$typeof']) === 'symbol') {
        return child['$$typeof'].description;
    }
    return typeof(child);
}
