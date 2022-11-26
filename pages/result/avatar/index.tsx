import Image from 'next/image';
import { useRouter } from 'next/router';
import { Layout } from '@components/common';
import { IUserIdentity } from '@/types/result';
import AVARTAR from '@constants/avatar';
import { AnalysisLoading } from '@components/Result';
import * as IdentityStyle from '@components/Result/Identity/Identity.style';
import * as FriendStyle from '@components/Result/Friend/Friend.style';
import * as ResultStyle from '@components/Result/Result.style';

function UserAvatarPage() {
  const router = useRouter();
  const avatarId = router.query.id as string;
  const userScore = router.query.s as string;

  const filterUserIdentity = (avatarId: string) => {
    const filteredAvatar = AVARTAR.filter(
      (avatar: IUserIdentity) => String(avatar.id) === avatarId,
    );

    return {
      title: filteredAvatar[0].identity,
      name: filteredAvatar[0].name,
      image: filteredAvatar[0].image,
      friendId: filteredAvatar[0].friend.id,
      friendImage: filteredAvatar[0].friend.image,
    };
  };

  if (!avatarId) {
    return <AnalysisLoading />;
  }

  return (
    <Layout>
      <ResultStyle.ResultContainer>
        <IdentityStyle.ResultTitle>
          친구의 제주력은 몇점?
        </IdentityStyle.ResultTitle>
        <IdentityStyle.TestScore>{`${userScore}점`}</IdentityStyle.TestScore>
        {avatarId && (
          <div>
            <IdentityStyle.UserIdentity>
              {filterUserIdentity(avatarId).title}
            </IdentityStyle.UserIdentity>
            <img
              src={filterUserIdentity(avatarId).image}
              alt={filterUserIdentity(avatarId).name}
            />
          </div>
        )}
        <ResultStyle.ResultUserAvatarFriend>
          <FriendStyle.FriendTitle>
            친구와 잘맞는 유형은?
          </FriendStyle.FriendTitle>
          <FriendStyle.FriendContentCard>
            <Image
              src={
                filterUserIdentity(
                  String(filterUserIdentity(avatarId).friendId),
                ).image
              }
              alt={filterUserIdentity(avatarId).name}
              width={145}
              height={135}
            />
            <FriendStyle.FriendIdentity>
              {
                filterUserIdentity(
                  String(filterUserIdentity(avatarId).friendId),
                ).title
              }
            </FriendStyle.FriendIdentity>
          </FriendStyle.FriendContentCard>
        </ResultStyle.ResultUserAvatarFriend>

        <ResultStyle.GoStartPageButton
          variant="primary"
          onClick={() => router.push('/')}
        >
          테스트 하러 하기
        </ResultStyle.GoStartPageButton>
      </ResultStyle.ResultContainer>
    </Layout>
  );
}

export default UserAvatarPage;
