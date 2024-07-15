import useSWR, { mutate } from "swr";
import styled from "styled-components";
import useLocalStorageState from "use-local-storage-state";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function HomePage() {
  const [clubMembers, setClubMembers] = useLocalStorageState("club members", {
    defaultValue: [],
  });

  const { data: person, isLoading } = useSWR("/api/random-character", fetcher);

  function handleAddPerson(person) {
    setClubMembers([person, ...clubMembers]);
    mutate("/api/random-character");
  }

  function handleCancelMembership(id) {
    setClubMembers(
      clubMembers.filter((clubMember) => {
        return clubMember.id !== id;
      })
    );
  }

  if (isLoading || !person) return <h1>Loading...</h1>;

  return (
    <>
      <StyledH1>This person wants to join the club:</StyledH1>
      <StyledCardContainer>
        <StyledCard>
          <h2>
            {person.firstName} {person.lastName}
          </h2>
          <h3>
            born: {person.birthday}, age: {person.age}
          </h3>
        </StyledCard>

        <StyledButtonContainer>
          <StyledButton type="button" onClick={() => handleAddPerson(person)}>
            Please come in!
          </StyledButton>
          <StyledButton
            type="button"
            onClick={() => mutate("/api/random-character")}
          >
            No, next!
          </StyledButton>
        </StyledButtonContainer>
      </StyledCardContainer>

      <ClubMemberContainer>
        {clubMembers.map((clubMember) => {
          return (
            <StyledClubCard key={clubMember.id}>
              <StyledMember>{clubMember.firstName}</StyledMember>
              <StyledMember>{clubMember.lastName}</StyledMember>
              <StyledCancelButton
                type="button"
                onClick={() => handleCancelMembership(clubMember.id)}
              >
                Cancel membership
              </StyledCancelButton>
            </StyledClubCard>
          );
        })}
      </ClubMemberContainer>
    </>
  );
}

const StyledH1 = styled.h1`
  padding: 20px;
  text-align: center;
`;

const StyledCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
`;

const StyledCard = styled.div`
  text-align: center;
  background-color: #c7fbff;
  padding: 20px;
  display: inline-block;
`;

const ClubMemberContainer = styled.div`
  min-height: 120px;
  padding: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  justify-content: center;
  background-color: #c7ffe4;
`;

const StyledClubCard = styled.section`
  text-align: center;
  padding: 20px;
  background-color: #ffc7e1;
`;

const StyledMember = styled.h4`
  padding: 0;
  margin: 0;
  font-size: 1.2rem;
`;

const StyledButton = styled.button`
  background-color: #000000;
  color: #ffffff;
  font-size: 1rem;
  padding: 15px;
  border: none;
  font-weight: bold;
`;

const StyledButtonContainer = styled.div`
  padding: 20px;
  padding-bottom: 40px;
  display: flex;
  gap: 10px;
`;

const StyledCancelButton = styled.button`
  margin-top: 16px;
  background-color: #ffffff;
  color: #000000;
  padding: 10px;
  border: none;
  font-weight: bold;
`;
