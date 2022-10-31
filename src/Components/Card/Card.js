/** @jsxImportSource @emotion/react */

import styled from "@emotion/styled/macro";
import Typography from "../Typography";
import { theme } from "../../Styles/theme";
import Icon from "../Icon/Icon";
import LinkWithIcon from "../Link/LinkWithIcon";
import Button from "../Button/Button";

const { palette, mq } = theme;

export default function Card(props) {
  const { data } = props;

  const IntroStyle = styled.div({
    display: "flex",
    flexDirection: "column",
    backgroundColor: "transparent",
    padding: 16,
    justifyContent: "center",
    gap: 24,
    [mq[2]]: {
      maxWidth: 312,
    },
  });

  const CardStyle = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    background-color: ${palette.white};
    cursor: pointer;
    border: 2px solid ${palette.interactive.neutral.light};
    padding: 8px;
    // box-shadow: 1px 1px 12px 0 rgb(0 0 0 / 16%);
    transition: all 0.3s cubic-bezier(0, 0, 0.5, 1);
    &:hover {
      box-shadow: 0px 0px 40px -8px rgba(0, 0, 0, 0.24),0 0 25px -16px rgba(0, 0, 0, 0.2);
      transform: scale3d(1.03, 1.03, 1.08) translate3d(0.1rem, -0.25rem, 20rem);
    }
  `;

  const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 100%;
    // height: 171px;
    aspect-ratio: 16 / 9;
    border-radius: 8px;
    background-image: url(${data.course_img});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 104%;
  `;

  const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    padding: 16px 8px;
    row-gap: 16px;
  `;

  const CardHeading = styled.div`
    display: grid;
    gap: 8px;
  `;

  const CardBody = styled.div`
  `

  const CardFooter = styled.div`
    // display: flex;
    // flex-direction: column;
    gap: 8px;
    margin-top: auto;
  `;
  const OrgLabel = styled.div`
    display: flex;
    align-items: center;
    gap: 4;
    color: ${palette.neutral.default};
  `;
  const OrgAvatar = styled.div`
    border-radius: 4px;
    border: 1px solid ${palette.neutral.lightCopy};
    margin-right: 8px;
    padding: 2px;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 24px;
    width: 24px;
    overflow: hidden;
  `;
  const metaData = styled.div`
    color: ${palette.neutral.lohp};
  `;
  const tagPlus = {
    height: 16,
    padding: "0 4px",
    display: "flex",
    alignItems: "center",
    borderRadius: 4,
    color: palette.white,
    backgroundColor: palette.interactive.primary.default,
  };

  return (
    <>
      {data.intro && (
        <IntroStyle>
          <div css={{ display: "grid", gap: 8 }}>
            <Typography label={data.title} h1 />
            <Typography
              css={{ color: palette.interactive.neutral.default }}
              label={data.subTitle}
              body1
            />
          </div>
          <div css={{display: "inline-block"}}>
          <Button variant="ghostPrimary" size="md" label={`View more ${data.product}s`} icon="arrowNext" margin="negativeLeft" />
          </div>
        </IntroStyle>
      )}

      {!data.intro && (
        <CardStyle>
          {/* card image */}
          <ImageContainer>
            {data.status.length > 0 && (
              <div
                css={{
                  position: "absolute",
                  backgroundColor: palette.neutral.light,
                  top: 16,
                  left: 16,
                  height: 22,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "0 8px",
                  borderRadius: 4,
                  border: `1px solid ${palette.neutral.lightCopy}`,
                }}
              >
                <Typography label={data.status[0]} h4 />
              </div>
            )}
          </ImageContainer>

          {/* card content */}
          <CardContent>
            {/* Top content section */}
            <CardHeading>
              {/* Organization information */}
              <OrgLabel>
                {data.org_img.length > 0 &&
                  data.org_img.map((el, index) => (
                  <OrgAvatar key={index} aria-hidden='true'>
                    <img
                      css={{ width: "100%" }}
                      src={el}
                      aria-hidden='true'
                    />
                  </OrgAvatar>
                ))}

                {(data.org_img.length > 0 && data.org_img.length < 2) ? 
                  <Typography label={data.org} body2 />
                  :
                  <Typography label="Multiple institutions" body2 />
                }
              </OrgLabel>

              {/* Card title */}
              <h3
                css={{
                  overflow: "hidden",
                  display: "-webkit-box",
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: "vertical",
                  textOverflow: "ellipsis",
                  margin: 0,
                }}
              >
                <a
                  css={{ textDecoration: "none", color: "inherit" }}
                  href={data.url}
                >
                  <Typography label={data.title} h3 />
                </a>
              </h3>
            </CardHeading>

            <CardBody>
              {/* Skillsets */}
              {data.skills && (
                <div
                  css={{
                    overflow: "hidden",
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    textOverflow: "ellipsis",
                  }}
                >
                  <Typography
                    css={{ color: palette.interactive.neutral.default }}
                    label={`Skills you'll gain: ${data.skills}`}
                    body2
                  />
                </div>
              )}
            </CardBody>

            {/* Bottom content section */}
            <CardFooter>
              {/* Product type */}
              {data.category.length > 0 && data.category === "plus" && (
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <Typography label='PLUS' style={tagPlus} h4Bold />
                  <Typography
                    css={{color: palette.neutral.default}}
                    label='Included with Coursera Plus'
                    body2
                  />
                </div>
              )}
              {data.product === "degree" && (
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <Icon type='degree' size='md' button='secondary' />
                  <Typography
                    css={{ color: palette.interactive.primary.default }}
                    label='Earn a degree'
                    body2
                  />
                </div>
              )}
              {data.credit.length > 0 && (
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <Typography
                    css={{ lineHeight: 0 }}
                    label={<Icon type='credit' size="sm" button='secondary' />}
                    body2
                  />
                  <Typography
                    css={{ color: palette.interactive.primary.default }}
                    label={data.credit}
                    body2
                  />
                </div>
              )}

              {/* Ratings */}
              {data.rating && (
                <div
                  css={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    marginBottom: 4,
                  }}
                >
                  <Typography
                    css={{ lineHeight: 0 }}
                    label={data.rating.split(" ")[0]}
                    h4Bold
                  />
                  <Icon type='star' size='sm' button='ghostPrimary' />
                  <Typography
                    css={{ lineHeight: 0, color: palette.neutral.lohp }}
                    label={data.rating.match(/^(\S+)\s(.*)/).slice(2)}
                    body2
                  />
                </div>
              )}

              {/* Category tags */}
              {data.meta_data && (
                <Typography
                  css={{
                    lineHeight: 0,
                    color: palette.neutral.default,
                  }}
                  label={data.meta_data.join(" · ")}
                  body2
                />
              )}
            </CardFooter>
          </CardContent>
        </CardStyle>
      )}
    </>
  );
}
