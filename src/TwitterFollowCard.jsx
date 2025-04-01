export function TwitterFollowCard ({ avatar, userName, name, isFollowing }) {
    const imageSrc = avatar;

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar' 
                    src={ imageSrc }
                    alt={ `Avatar de ${avatar}` }
                />
                <div className='tw-followCard-info'>
                    <strong className='tw-followCard-username'>{ name }</strong>
                    <span className='tw-followCard-infoUserName'>@{ userName }</span>
                </div>
            </header>

            <aside>
                <button
                    className={isFollowing ? 'tw-followCard-isFollowing' : 'tw-followCard-follow'}
                >
                    {isFollowing ? 'Siguiendo' : 'Seguir'}
                </button>
            </aside>
        </article>
    )
}